"use client";

import { useEffect, useRef, useState } from "react";

const POSTER = "/winter/hero2-poster.jpg";
const VIDEO = "/winter/hero2.mp4";

/**
 * The hero film over a still of the same house. The still is always there; the video only fades in once it is actually
 * playing. iPhones in Low Power Mode refuse autoplay and would show a frozen frame with a play button (Josh, 11/16):
 * here play() is refused, the video never shows, and the visitor just sees the house. Never native controls.
 */
export function HeroVideo({ label }: { label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current!;
    const on = () => setPlaying(true);
    const off = () => { if (v.paused) setPlaying(false); };
    v.addEventListener("playing", on);
    v.addEventListener("pause", off);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { v.pause(); return () => v.removeEventListener("playing", on); }
    if (!v.paused && v.readyState > 2) on(); // autoplay won before hydration
    else v.play().catch(() => setPlaying(false)); // Low Power Mode and data saver land here: the still stays
    return () => { v.removeEventListener("playing", on); v.removeEventListener("pause", off); };
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={POSTER} alt={label ?? ""} aria-hidden={label ? undefined : true} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover object-[50%_55%]" />
      <video
        ref={ref} autoPlay muted loop playsInline preload="auto" aria-hidden disablePictureInPicture
        className={`hero-video absolute inset-0 w-full h-full object-cover object-[50%_55%] transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
    </>
  );
}
