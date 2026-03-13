"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0.1 = subtle, 0.5 = strong
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.15 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far through the viewport the element is
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setOffset((progress - 0.5) * speed * 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className="relative w-full h-[120%] -mt-[10%]"
        style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
      >
        <Image src={src} alt={alt} fill className="object-cover" loading="lazy" />
      </div>
    </div>
  );
}
