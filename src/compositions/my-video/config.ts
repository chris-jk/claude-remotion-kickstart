// Segment durations — each runs until the next section's first word
// Whisper timestamps (pre-silence): Hook@0.0, Hanoi@11.22, HaLong@25.24,
//   HoiAn@38.32, HCMC@48.02, Outro@61.6, end@72.12
// 2s silence prepended to audio → total audio = 75.1s

export const TITLE_DURATION_SECONDS = 2;
export const HOOK_DURATION_SECONDS = 11.22;
export const HANOI_DURATION_SECONDS = 14.02;   // 25.24 - 11.22
export const HALONG_DURATION_SECONDS = 13.08;  // 38.32 - 25.24
export const HOIAN_DURATION_SECONDS = 9.7;     // 48.02 - 38.32
export const HCMC_DURATION_SECONDS = 13.58;    // 61.6  - 48.02
export const OUTRO_DURATION_SECONDS = 11.5;    // 72.12 - 61.6 + tail
