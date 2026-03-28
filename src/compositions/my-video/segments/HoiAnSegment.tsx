import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRollVideo } from "../../../components/BRollVideo";

// Whisper timestamps relative to Hoi An segment start @ 38.32s (60fps)
const LINES = [
  { text: "Head south to Hoi An.",                                                 frame: 0   },
  { text: "Ancient town, lanterns everywhere,",                                    frame: 50  },
  { text: "tailor shops that will make you a suit in 24 hours.",                   frame: 171 },
  { text: "The white rose dumplings are reason enough to go.",                     frame: 375 },
];

export const HoiAnSegment: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <BRollVideo filename="video/hoian.mp4" startTime={0} zoomStart={1} zoomEnd={1.06} playbackRate={1} />
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 45%, transparent 75%)" }} />
      <AbsoluteFill className="flex flex-col justify-end px-20 pb-20 gap-4">
        <p className="font-black uppercase tracking-widest text-yellow-400" style={{ fontSize: 28, letterSpacing: "0.2em" }}>Hoi An</p>
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
