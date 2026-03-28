import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRollVideo } from "../../../components/BRollVideo";

export const TitleSegment: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 40], [1.08, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <BRollVideo filename="video/vietnam-aerial.mp4" startTime={0} zoomStart={1} zoomEnd={1.05} playbackRate={1} />
      <AbsoluteFill style={{ background: "rgba(0,0,0,0.45)" }} />
      <AbsoluteFill className="flex items-center justify-center">
        <div style={{ opacity, transform: `scale(${scale})`, textAlign: "center" }}>
          <div
            className="font-black tracking-widest uppercase"
            style={{ fontSize: 160, color: "#fff", letterSpacing: "0.15em", lineHeight: 1 }}
          >
            Vietnam
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
