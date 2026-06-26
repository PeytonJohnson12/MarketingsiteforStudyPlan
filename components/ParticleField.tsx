"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle "productivity network" canvas: slow-drifting nodes with connecting
 * lines. Performance-minded: capped node count, DPR-aware, a deferred start (so
 * it never competes with hydration / first paint), pauses when the tab is hidden
 * OR the hero scrolls out of view, and renders nothing under reduced motion.
 */
export function ParticleField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ACCENT = "124, 92, 240";
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let raf = 0;
    let inView = true;
    let ready = false;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent?.clientWidth ?? window.innerWidth;
      h = parent?.clientHeight ?? 480;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(56, Math.round((w * h) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const isRunning = () => ready && inView && !document.hidden;

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(${ACCENT}, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${ACCENT}, 0.45)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      if (isRunning()) raf = requestAnimationFrame(frame);
    };

    const sync = () => {
      cancelAnimationFrame(raf);
      if (isRunning()) raf = requestAnimationFrame(frame);
    };

    resize();

    // Pause when the hero scrolls out of view — no point animating off-screen.
    const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; sync(); }, { threshold: 0 });
    io.observe(canvas);
    const onVisibility = () => sync();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    // Defer the first start so it never competes with hydration / first paint.
    const begin = () => { ready = true; sync(); };
    const idle = typeof window.requestIdleCallback === "function";
    const startId = idle ? window.requestIdleCallback(begin, { timeout: 1500 }) : window.setTimeout(begin, 700);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (idle) window.cancelIdleCallback(startId);
      else clearTimeout(startId);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
