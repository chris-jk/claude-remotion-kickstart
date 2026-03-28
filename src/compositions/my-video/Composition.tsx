import { AbsoluteFill, Audio, staticFile, useVideoConfig } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { linearTiming } from "@remotion/transitions";
import { getDurationInFrames } from "../../config";
import { createComposition } from "../../utils/createComposition";
import {
  TITLE_DURATION_SECONDS,
  HOOK_DURATION_SECONDS,
  HANOI_DURATION_SECONDS,
  HALONG_DURATION_SECONDS,
  HOIAN_DURATION_SECONDS,
  HCMC_DURATION_SECONDS,
  OUTRO_DURATION_SECONDS,
} from "./config";
import { TitleSegment } from "./segments/TitleSegment";
import { HookSegment } from "./segments/HookSegment";
import { HanoiSegment } from "./segments/HanoiSegment";
import { HaLongSegment } from "./segments/HaLongSegment";
import { HoiAnSegment } from "./segments/HoiAnSegment";
import { HCMCSegment } from "./segments/HCMCSegment";
import { OutroSegment } from "./segments/OutroSegment";

const FADE_FRAMES = 30;

const MyVideoComposition: React.FC = () => {
  const { fps } = useVideoConfig();

  const t = (s: number) => getDurationInFrames(s, fps);

  return (
    <AbsoluteFill>
      <Audio src={staticFile("audio/voiceover.mp3")} />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={t(TITLE_DURATION_SECONDS)}>
          <TitleSegment />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: FADE_FRAMES })} />

        <TransitionSeries.Sequence durationInFrames={t(HOOK_DURATION_SECONDS)}>
          <HookSegment />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: FADE_FRAMES })} />

        <TransitionSeries.Sequence durationInFrames={t(HANOI_DURATION_SECONDS)}>
          <HanoiSegment />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: FADE_FRAMES })} />

        <TransitionSeries.Sequence durationInFrames={t(HALONG_DURATION_SECONDS)}>
          <HaLongSegment />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: FADE_FRAMES })} />

        <TransitionSeries.Sequence durationInFrames={t(HOIAN_DURATION_SECONDS)}>
          <HoiAnSegment />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: FADE_FRAMES })} />

        <TransitionSeries.Sequence durationInFrames={t(HCMC_DURATION_SECONDS)}>
          <HCMCSegment />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: FADE_FRAMES })} />

        <TransitionSeries.Sequence durationInFrames={t(OUTRO_DURATION_SECONDS)}>
          <OutroSegment />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

const TRANSITION_OVERLAP = (FADE_FRAMES / 60) * 6; // 6 transitions × 0.5s each = 3s overlap
const TOTAL_DURATION_SECONDS =
  TITLE_DURATION_SECONDS +
  HOOK_DURATION_SECONDS +
  HANOI_DURATION_SECONDS +
  HALONG_DURATION_SECONDS +
  HOIAN_DURATION_SECONDS +
  HCMC_DURATION_SECONDS +
  OUTRO_DURATION_SECONDS -
  TRANSITION_OVERLAP;

export const MyVideo = createComposition({
  name: "MyVideo",
  component: MyVideoComposition,
  durationInSeconds: TOTAL_DURATION_SECONDS,
  preset: "Landscape-1080p",
});
