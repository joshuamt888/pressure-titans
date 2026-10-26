import { useEffect, type RefObject } from "react";

/**
 * Starts with the light file the page already loaded. Once the page is idle it fetches the sharp file in the background
 * and swaps it in on the same frame the visitor is on, so the picture just gets crisper. Skipped on data saver and slow links.
 */
export function useHiRes(ref: RefObject<HTMLVideoElement | null>, hiUrl: string) {
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || /(^|-)2g$|^3g$/.test(conn?.effectiveType ?? "")) return;
    let url = "";
    let dead = false;
    const run = async () => {
      try {
        const r = await fetch(hiUrl);
        if (!r.ok || dead) return;
        const blob = await r.blob();
        const v = ref.current;
        if (dead || !v) return;
        url = URL.createObjectURL(blob);
        const t = v.currentTime;
        v.addEventListener("loadedmetadata", () => { v.currentTime = t; }, { once: true });
        v.src = url;
        v.load();
      } catch { /* the light version keeps working */ }
    };
    // a beat after the page settles, so the light file and the first screens get the bandwidth first
    const id = window.setTimeout(run, 1800);
    return () => { dead = true; clearTimeout(id); if (url) URL.revokeObjectURL(url); };
  }, [ref, hiUrl]);
}
