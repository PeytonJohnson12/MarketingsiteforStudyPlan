import { ImageResponse } from "next/og";

// Code-generated social share image (replaces the old static PNG) so it always
// reflects the current Navo brand. 1200x630 is the standard OG/Twitter size.
export const alt = "Navo — the Canvas study planner that never misses what's due";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(135deg, #7c5cf0 0%, #6a47e0 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 44 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
              <path d="M5 12.5l4.4 4.4L19 7" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ fontSize: 42, fontWeight: 700 }}>Navo</div>
        </div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 920 }}>
          Know what&rsquo;s due. Ace what&rsquo;s next.
        </div>
        <div style={{ fontSize: 34, marginTop: 32, color: "rgba(255,255,255,0.9)", maxWidth: 880 }}>
          The Canvas study planner that never misses what&rsquo;s due.
        </div>
      </div>
    ),
    { ...size },
  );
}
