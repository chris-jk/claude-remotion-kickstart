export const CONTENT = {
  // Title
  titleLine1: "Vibe Coding",
  titleLine2: "Technical Videos",
  titleSubtitle: "with Claude Code + Remotion",

  // The Problem
  problemHeader: "The Old Way",
  problemBullets: [
    "Record screen, fumble with cuts",
    "Manually add captions & animations",
    "Re-record every time content changes",
    "Hours per minute of finished video",
  ],

  // The Solution
  solutionHeader: "The New Way",
  solutionContent:
    "Describe your video to Claude.\nClaude writes Remotion components.\nPreview live. Render to MP4.",

  // The Stack
  stackHeader: "Remotion",
  stackContent:
    "A React framework for creating videos programmatically.\nWrite components, render MP4s — no timeline editor needed.",

  // The Workflow
  workflowHeader: "The Workflow",
  workflowSteps: [
    "1 — Describe  →  Tell Claude what you want",
    "2 — Generate  →  Claude writes the components",
    "3 — Preview   →  Hot-reload in the browser",
    "4 — Render    →  pnpm exec remotion render",
  ],

  // Code slide
  codeTitle: "It's Just React",
  codeExample: `const MyVideoComposition: React.FC = () => {
  const { fps } = useVideoConfig();
  const titleDuration = getDurationInFrames(3, fps);
  const contentDuration = getDurationInFrames(5, fps);

  return (
    <Series>
      <Series.Sequence durationInFrames={titleDuration}>
        <TitleSlide title="Hello World" />
      </Series.Sequence>
      <Series.Sequence durationInFrames={contentDuration}>
        <ContentSlide
          header="Getting Started"
          content="Build videos with React"
        />
      </Series.Sequence>
    </Series>
  );
};`,

  // Outro
  outroLine1: "Ship Videos",
  outroLine2: "Like Code",
};
