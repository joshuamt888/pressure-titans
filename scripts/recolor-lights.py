# Builds colors-redwhite / colors-redgreen from the warm white photo so the bulbs, their halos and the light they
# cast all take the new color. light = white - background (bulbs eroded out); each bulb's light is re-tinted and added back.
# Which bulb is which: the existing mix preview (warm white + green, alternating) gives the pattern.
import sys, numpy as np
from PIL import Image, ImageFilter

d, out = sys.argv[1], sys.argv[2]
ld = lambda n: np.asarray(Image.open(f"{d}/colors-{n}.webp").convert("RGB")).astype(np.float32)
white, red_ai = ld("white"), ld("red")

def filt(a, *fs):
    im = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))
    for f in fs: im = im.filter(f)
    return np.asarray(im).astype(np.float32)

# background: erode bright small things (bulbs + halos), then soften
bg = np.stack([filt(white[..., c], ImageFilter.MinFilter(9), ImageFilter.MinFilter(9), ImageFilter.GaussianBlur(5)) for c in range(3)], 2)
bg = np.minimum(bg, white)
light = np.clip(white - bg, 0, None)
# only the warm light the bulbs add: neutral white trim and snow stay as they are
warm = np.clip(((white[..., 0] - white[..., 2]) - (bg[..., 0] - bg[..., 2])) / 45, 0, 1)

# bulb cores: where the AI red edit put red bulbs (it found every bulb), green ones from mix
cores = (red_ai[..., 0] - red_ai[..., 1] > 90) & (red_ai[..., 0] > 170) & (white.max(2) > 170) & (white[..., 0] - white[..., 1] < 70) & (white - bg).max(2).__gt__(45)  # a bright warm-white point in the real photo (the red snowblower is not)
# label each bulb (union-find on core pixels), then 2-color the chain of neighbours so colors alternate bulb by bulb
cores[600:640, 800:900] = False                 # the porch pendant light is not a Christmas bulb
cores[640:] = False                             # this photo: every light is on a roof or soffit line; below y=640 is the driveway and snowblower
ys, xs = np.nonzero(cores)
idx = -np.ones(cores.shape, np.int64); idx[ys, xs] = np.arange(len(ys))
par = np.arange(len(ys))
def find(a):
    while par[a] != a: par[a] = par[par[a]]; a = par[a]
    return a
for k, (y, x) in enumerate(zip(ys, xs)):
    for dy, dx in ((0, 1), (1, 0), (1, 1), (1, -1)):
        yy, xx = y + dy, x + dx
        if 0 <= yy < cores.shape[0] and 0 <= xx < cores.shape[1] and idx[yy, xx] >= 0:
            a, b = find(k), find(idx[yy, xx])
            if a != b: par[a] = b
roots = np.array([find(k) for k in range(len(ys))])
ids, lab = np.unique(roots, return_inverse=True)
def centers(lab):
    c = np.bincount(lab); return np.bincount(lab, ys) / c, np.bincount(lab, xs) / c
cy, cx = centers(lab)
P = np.stack([cy, cx], 1); D = np.sqrt(((P[:, None] - P[None]) ** 2).sum(2)); np.fill_diagonal(D, 1e9)
sp = np.median(D.min(1))
# touching bulbs merge into one long blob; cut each blob into bulb-sized pieces along its own axis
new = np.zeros_like(lab); nxt = 0
for i in range(lab.max() + 1):
    m = lab == i; py, px = ys[m] - cy[i], xs[m] - cx[i]
    if len(py) > 2:
        w_, v = np.linalg.eigh(np.cov(np.stack([py, px])))
        t = py * v[0, -1] + px * v[1, -1]
        k = max(1, int(round((t.max() - t.min()) / sp)))
    else: t, k = py * 0, 1
    b = np.minimum(((t - t.min()) / (np.ptp(t) + 1e-6) * k).astype(int), k - 1)
    new[m] = nxt + b; nxt += k
lab = np.unique(new, return_inverse=True)[1]
cy, cx = centers(lab); n = len(cy)
P = np.stack([cy, cx], 1); D = np.sqrt(((P[:, None] - P[None]) ** 2).sum(2)); np.fill_diagonal(D, 1e9)
color = -np.ones(n, int)
for s0 in np.argsort(cx):                       # BFS from the leftmost uncolored bulb
    if color[s0] >= 0: continue
    color[s0] = 0; q = [s0]
    while q:
        a = q.pop(0)
        for b in np.nonzero(D[a] < sp * 1.7)[0]:
            if color[b] < 0: color[b] = 1 - color[a]; q.append(b)
# every pixel belongs to its nearest bulb, so overlapping halos never blend into a third color
H, W = cores.shape
gy, gx = np.mgrid[0:H:1, 0:W:1]
own = np.zeros((H, W), int); best = np.full((H, W), 1e9, np.float32)
for i in range(n):
    y0, y1, x0, x1 = int(max(cy[i] - 40, 0)), int(min(cy[i] + 41, H)), int(max(cx[i] - 40, 0)), int(min(cx[i] + 41, W))
    dd = (gy[y0:y1, x0:x1] - cy[i]) ** 2 + (gx[y0:y1, x0:x1] - cx[i]) ** 2
    m = dd < best[y0:y1, x0:x1]; best[y0:y1, x0:x1][m] = dd[m]; own[y0:y1, x0:x1][m] = i
fg = filt((color[own] == 1) * 255.0, ImageFilter.GaussianBlur(0.8))[..., None] / 255.0
gcores = cores & (color[own] == 1); wcores = cores & (color[own] == 0)
field = lambda m, r, b: filt(m * 255.0, *([ImageFilter.MaxFilter(5)] * r), ImageFilter.GaussianBlur(b)) / 255.0
reach = np.clip(field(cores, 2, 4) * 2.0, 0, 1)            # how far a bulb's light is recolored
print("bulbs", n, "spacing px", round(float(sp), 1))

def tint(L, c):
    lum = L.max(2, keepdims=True)
    col = lum * np.array(c, np.float32)
    hot = np.clip((lum - 150) / 105, 0, 1) ** 2                # blown-out core keeps a hot pale center like a real bulb
    return col * (1 - 0.35 * hot) + lum * 0.35 * hot

RED, GREEN = (1.0, 0.13, 0.11), (0.16, 1.0, 0.36)
core_soft = field(cores, 0, 1.5)
r = (reach * np.maximum(warm, np.clip(core_soft * 3, 0, 1)))[..., None]
def build(light_mix):
    return np.clip(bg + light * (1 - r) + light_mix * r, 0, 255).astype(np.uint8)

redwhite = build(fg * tint(light, RED) + (1 - fg) * light)
redgreen = build(fg * tint(light, GREEN) + (1 - fg) * tint(light, RED))
Image.fromarray(redwhite).save(f"{out}/colors-redwhite.webp", quality=90)
Image.fromarray(redgreen).save(f"{out}/colors-redgreen.webp", quality=90)

# check: far from bulbs the photo is untouched; near bulbs both colors are present
far = reach < 0.01
assert np.abs(redwhite.astype(np.float32) - white)[far].mean() < 1.0
assert gcores.sum() > 200 and wcores.sum() > 200, (gcores.sum(), wcores.sum())
rr = redgreen[cores]; assert ((rr[:, 0] > rr[:, 1] + 60).mean() > 0.3) and ((rr[:, 1] > rr[:, 0] + 40).mean() > 0.2)
print("ok cores", cores.sum(), "green", gcores.sum(), "white", wcores.sum())
