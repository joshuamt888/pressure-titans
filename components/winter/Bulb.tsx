/** A Christmas bulb: socket cap and glass. Sideways by default (hangs off a wire); `upright` stands it on its cap. Lit via data-on. */
export function Bulb({ on = false, upright = false, color, className = "" }: { on?: boolean; upright?: boolean; color?: string; className?: string }) {
  const style = color
    ? ({ "--bulb": color, "--bulb-edge": `color-mix(in srgb, ${color} 55%, white)`, "--bulb-glow": `color-mix(in srgb, ${color} 90%, transparent)`, "--bulb-glow2": `color-mix(in srgb, ${color} 45%, transparent)` } as React.CSSProperties)
    : undefined;
  return (
    <svg className={`bulb ${className}`} style={style} data-on={on ? "true" : "false"} viewBox={upright ? "0 0 24 36" : "0 0 36 24"} aria-hidden>
      <g transform={upright ? "translate(0 36) rotate(-90)" : undefined}>
        <path className="glass" d="M7.5 8.5 L13 8 C15 4.5 19 2 24 2 C30.5 2 35 6.5 35 12 C35 17.5 30.5 22 24 22 C19 22 15 19.5 13 16 L7.5 15.5 Z" />
        <path className="fil" d="M16.5 12 L19 8.5 L21.5 15.5 L24 8.5 L26.5 15.5 L29 12" fill="none" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
        <ellipse cx="25.5" cy="6.8" rx="4.2" ry="1.9" fill="#fff" opacity="0.32" transform="rotate(-12 25.5 6.8)" />
        <rect x="0" y="7.6" width="8.5" height="8.8" rx="1.6" fill="#5b6475" />
        <path d="M3 7.8 V16.2 M5.7 7.8 V16.2" stroke="#2a303c" strokeWidth="1" />
      </g>
    </svg>
  );
}
