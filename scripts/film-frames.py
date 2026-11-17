# Cut the lighting film into frames for the canvas, with the CSS grade (brightness 1.06, contrast 1.1, saturate 1.1)
# baked in so the browser never filters a full-screen layer while scrolling. lg = every frame 1280px, sm = every 2nd at 720px.
import sys, glob, os, numpy as np
from PIL import Image
src, out = sys.argv[1], sys.argv[2]
L = np.array([0.2126, 0.7152, 0.0722], np.float32)
def grade(im):
    a = np.asarray(im, np.float32) / 255 * 1.06                     # brightness()
    a = (a - 0.5) * 1.1 + 0.5                                       # contrast()
    l = (a @ L)[..., None]; a = l + (a - l) * 1.1                   # saturate(), luminance-preserving
    return Image.fromarray((np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8))
fs = sorted(glob.glob(f"{src}/*.png"))
for d in ("sm", "lg"): os.makedirs(f"{out}/{d}", exist_ok=True)
for i, f in enumerate(fs):
    g = grade(Image.open(f).convert("RGB"))
    g.resize((1280, 720), Image.LANCZOS).save(f"{out}/lg/f{i:03d}.webp", quality=58, method=6)
    if i % 2 == 0: g.resize((720, 405), Image.LANCZOS).save(f"{out}/sm/f{i // 2:03d}.webp", quality=60, method=6)
assert len(os.listdir(f"{out}/lg")) == len(fs) and len(os.listdir(f"{out}/sm")) == (len(fs) + 1) // 2
print(len(fs), "frames")
