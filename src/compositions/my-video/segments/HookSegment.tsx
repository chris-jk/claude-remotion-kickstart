import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRollVideo } from "../../../components/BRollVideo";

// Frame triggers from Whisper timestamps relative to segment start (60fps)
const LINES = [
  { text: "Vietnam caught me off guard.",                                          frame: 0   },
  { text: "I went expecting temples and traffic.",                                 frame: 143 },
  { text: "I stayed for the food, the chaos, and the kind of energy\nthat makes sense once you're inside it.", frame: 328 },
];

export const HookSegment: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <BRollVideo filename="video/vietnam-aerial.mp4" startTime={3} zoomStart={1.05} zoomEnd={1.12} playbackRate={1} />
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 45%, transparent 75%)" }} />
      <AbsoluteFill className="flex flex-col justify-end px-20 pb-20 gap-5">
        {LINES.map(({ text, frame: triggerFrame }) => {
          const opacity = interpolate(frame, [triggerFrame, triggerFrame + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [triggerFrame, triggerFrame + 20], [16, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <p
              key={text}
              className="text-white font-semibold leading-snug whitespace-pre-line"
              style={{ fontSize: 42, opacity, transform: `translateY(${y}px)` }}
            >
              {text}
            </p>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
