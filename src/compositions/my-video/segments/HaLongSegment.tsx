import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRollVideo } from "../../../components/BRollVideo";

// Whisper timestamps relative to Ha Long segment start @ 25.24s (60fps)
const LINES = [
  { text: "Go north to Ha Long Bay.",                                              frame: 0   },
  { text: "Three thousand limestone islands rising out of green water.",           frame: 152 },
  { text: "Rent a junk boat, sleep on the bay.",                                   frame: 406 },
  { text: "This is the part where you stop checking your phone.",                  frame: 576 },
];

export const HaLongSegment: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <BRollVideo filename="video/halong.mp4" startTime={0} zoomStart={1} zoomEnd={1.06} playbackRate={1} />
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 45%, transparent 75%)" }} />
      <AbsoluteFill className="flex flex-col justify-end px-20 pb-20 gap-4">
        <p className="font-black uppercase tracking-widest text-emerald-400" style={{ fontSize: 28, letterSpacing: "0.2em" }}>Ha Long Bay</p>
        {LINES.map(({ text, frame: triggerFrame }) => {
          const opacity = interpolate(frame, [triggerFrame, triggerFrame + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [triggerFrame, triggerFrame + 20], [14, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <p
              key={text}
              className="text-white font-semibold leading-snug"
              style={{ fontSize: 38, opacity, transform: `translateY(${y}px)` }}
            >
              {text}
            </p>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
