import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRollVideo } from "../../../components/BRollVideo";

// Whisper timestamps relative to Outro segment start @ 61.6s (60fps)
const LINES = [
  { text: "Five cities.",                                          frame: 0   },
  { text: "Three weeks.",                                          frame: 92  },
  { text: "One motorbike lesson that did not go well.",            frame: 194 },
  { text: "Vietnam doesn't slow down for you.\nThat's the point.", frame: 418 },
];

export const OutroSegment: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <BRollVideo filename="video/vietnam-aerial.mp4" startTime={8} zoomStart={1.1} zoomEnd={1} playbackRate={1} />
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.3) 100%)" }} />
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
              className="text-white font-black leading-snug whitespace-pre-line"
              style={{ fontSize: 48, opacity, transform: `translateY(${y}px)` }}
            >
              {text}
            </p>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
