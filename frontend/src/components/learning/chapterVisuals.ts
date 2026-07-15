import type { ChapterId } from "../../types/learning";

/** The domain color family a chapter's physics belongs to. This is a fixed
 * property of the chapter (unlike its status), so it never needs to change
 * across phases: cyan for foundational structure (A-C), violet for
 * symmetry (D), magenta for vacuum/Higgs concepts (E). Chapter C sits at
 * the seam between "foundational" and "symmetry" and uses a transitional
 * blend. Styling reads this off a data-domain attribute rather than a
 * hardcoded per-chapter class, so flipping a chapter's status is the only
 * thing later phases need to do. */
export type ChapterDomain = "cyan" | "cyan-violet" | "violet" | "magenta";

const CHAPTER_DOMAINS: Record<ChapterId, ChapterDomain> = {
  A: "cyan",
  B: "cyan",
  C: "cyan-violet",
  D: "violet",
  E: "magenta",
};

export function domainForChapter(chapterId: ChapterId): ChapterDomain {
  return CHAPTER_DOMAINS[chapterId];
}
