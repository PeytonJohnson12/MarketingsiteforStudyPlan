import { cn } from "@/lib/utils";

// Abstract, on-palette gradient orbs that slowly drift. GPU-cheap (transform +
// opacity only), decorative, and silenced by the global reduced-motion rule.
type Orb = { size: number; pos: React.CSSProperties; color: string; anim: string; delay: string };

const TONES: Record<"cool" | "warm", Orb[]> = {
  cool: [
    { size: 340, pos: { top: "-5rem", left: "-4rem" }, color: "124 92 240", anim: "animate-drift", delay: "0s" },
    { size: 300, pos: { bottom: "-6rem", right: "-3rem" }, color: "14 165 233", anim: "animate-drift-slow", delay: "-7s" },
    { size: 220, pos: { top: "28%", right: "18%" }, color: "236 72 153", anim: "animate-drift", delay: "-13s" },
  ],
  warm: [
    { size: 320, pos: { top: "-4rem", right: "-4rem" }, color: "47 158 107", anim: "animate-drift-slow", delay: "-3s" },
    { size: 280, pos: { bottom: "-5rem", left: "-3rem" }, color: "217 148 35", anim: "animate-drift", delay: "-10s" },
    { size: 220, pos: { top: "34%", left: "16%" }, color: "124 92 240", anim: "animate-drift-slow", delay: "-16s" },
  ],
};

// Abstract "connection network" — echoes the hero's particle field as a faint,
// slowly drifting SVG constellation. Color comes from `currentColor` (set a text
// color on the element).
const NODES: [number, number][] = [
  [30, 40], [90, 25], [150, 55], [55, 95], [115, 110], [175, 95], [35, 150], [100, 165], [165, 150],
];
const LINES: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 7], [5, 8], [6, 7], [7, 8],
];

export function Constellation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className={cn("pointer-events-none absolute animate-drift-slow", className)}>
      {LINES.map(([a, b], i) => (
        <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} stroke="currentColor" strokeWidth="1" opacity="0.5" />
      ))}
      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.4" fill="currentColor" />
      ))}
    </svg>
  );
}

// Abstract orbit rings with a traveling dot — a slow-rotating corner accent.
export function OrbitRings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className={cn("pointer-events-none absolute", className)}>
      <g className="animate-spin-slow" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="1" opacity="0.55" />
        <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="3 7" />
        <circle cx="100" cy="5" r="4" fill="currentColor" />
        <circle cx="162" cy="100" r="3" fill="currentColor" opacity="0.7" />
      </g>
    </svg>
  );
}

export function Blobs({ tone = "cool", className }: { tone?: "cool" | "warm"; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {TONES[tone].map((o, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full will-change-transform", o.anim)}
          style={{
            width: o.size,
            height: o.size,
            ...o.pos,
            background: `radial-gradient(closest-side, rgb(${o.color} / 0.16), rgb(${o.color} / 0.05), transparent)`,
            animationDelay: o.delay,
          }}
        />
      ))}
    </div>
  );
}
