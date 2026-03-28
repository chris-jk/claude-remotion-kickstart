import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRollVideo } from "../../../components/BRollVideo";

// Whisper timestamps relative to Hanoi segment start @ 11.22s (60fps)
const LINES = [
  { text: "Start in Hanoi.",                                                       frame: 0   },
  { text: "The Old Quarter is 36 streets of sensory overload —",                  frame: 115 },
  { text: "motorbikes, street vendors, lakes so still they look painted.",         frame: 272 },
  { text: "Eat bun cha for breakfast.\nIgnore anyone who tells you that's wrong.", frame: 534 },
];

export const HanoiSegment: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <BRollVideo filename="video/hanoi.mp4" startTime={0} zoomStart={1} zoomEnd={1.06} playbackRate={1} />
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 45%, transparent 75%)" }} />
      <AbsoluteFill className="flex flex-col justify-end px-20 pb-20 gap-4">
        <p className="font-black uppercase tracking-widest text-orange-400" style={{ fontSize: 28, letterSpacing: "0.2em" }}>Hanoi</p>
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
              className="text-white font-semibold leading-snug whitespace-pre-line"
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
