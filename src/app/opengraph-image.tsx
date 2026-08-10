import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0b0a08",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#ff4611",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)" }}>
            Senior Product Designer · 10+ years
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 980,
          }}
        >
          <span>Product&nbsp;design&nbsp;for&nbsp;the&nbsp;industries&nbsp;where&nbsp;</span>
          <span style={{ color: "#ff4611" }}>complexity&nbsp;</span>
          <span>is&nbsp;the&nbsp;whole&nbsp;job.</span>
        </div>

        <div style={{ display: "flex", fontSize: 32, fontWeight: 600 }}>
          Adi Hodzic
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
