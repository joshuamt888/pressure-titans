"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const videos = [
  { src: "/videos/fullhousejob.mp4", label: "Full House Wash" },
  { src: "/videos/pressurewashingwall.mp4", label: "Wall Cleaning" },
  { src: "/videos/walkwaytohouse.mp4", label: "Walkway Restoration" },
  { src: "/videos/removingstainoffthecement.mp4", label: "Stain Removal" },
  { src: "/videos/pressurewashingjob1.mp4", label: "Pressure Washing" },
  { src: "/videos/pressurewashingjob2.mp4", label: "Driveway Cleaning" },
  { src: "/videos/doingacarwashplace.mp4", label: "Commercial Wash" },
  { src: "/videos/pressurewashingjobwiththemachine.mp4", label: "Machine Work" },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [activated, setActivated] = useState(false);
  const animating = useRef(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const stopAllVideos = useCallback(() => {
    videoRefs.current.forEach((v) => {
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    });
    setActivated(false);
  }, []);

  const go = useCallback(
    (dir: number) => {
      if (animating.current) return;
      animating.current = true;
      stopAllVideos();
      setCurrent((c) => (c + dir + videos.length) % videos.length);
      setTimeout(() => {
        animating.current = false;
      }, 550);
    },
    [stopAllVideos]
  );

  const handlePlay = useCallback(() => {
    const video = videoRefs.current[current];
    if (!video) return;
    video.play();
    setActivated(true);
  }, [current]);

  useEffect(() => {
    const video = videoRefs.current[current];
    if (!video) return;
    const handleEnded = () => setActivated(false);
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [current]);

  return (
    <div>
      {/* Video container */}
      <div className="relative rounded-2xl overflow-hidden aspect-[9/16] max-h-[70vh] mx-auto bg-navy-light shadow-2xl shadow-black/30" style={{ maxWidth: "min(100%, 400px)" }}>
        {videos.map((video, i) => (
          <div
            key={video.src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="w-full h-full object-contain"
              controls={i === current && activated}
              muted
              playsInline
              preload={i === 0 ? "auto" : i === current || Math.abs(i - current) <= 1 ? "metadata" : "none"}
              poster={i === 0 ? "/images/fullhousejob-poster.webp" : undefined}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}

        {/* Play overlay — only when not activated */}
        {!activated && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 z-10 flex items-center justify-center"
            aria-label="Play video"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}

        {/* Label — hide when activated so it doesn't cover controls */}
        {!activated && (
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 to-transparent p-6 pointer-events-none">
            <span className="text-white font-heading font-bold text-lg">{videos[current].label}</span>
          </div>
        )}
      </div>

      {/* Arrows + Counter */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={() => go(-1)}
          className="w-12 h-12 bg-white/10 hover:bg-titan-accent border border-white/20 hover:border-titan-accent rounded-full flex items-center justify-center text-white transition-all"
          aria-label="Previous video"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="text-white/40 text-sm">
          {current + 1} / {videos.length}
        </p>
        <button
          onClick={() => go(1)}
          className="w-12 h-12 bg-white/10 hover:bg-titan-accent border border-white/20 hover:border-titan-accent rounded-full flex items-center justify-center text-white transition-all"
          aria-label="Next video"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
