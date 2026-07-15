// Type schema for the Academic Learning Path.
//
// This file models the COMPLETE five-chapter, 21-lesson curriculum so that
// later phases only need to add data (chapter metadata + Lesson objects) —
// no changes to these types or to the learning components should be needed
// to add Chapters C, D and E.

export type ChapterId = "A" | "B" | "C" | "D" | "E";

export type ChapterStatus = "available" | "in-development";

export type DepthLevel = "intuition" | "bridge" | "academic";

export const DEPTH_LEVELS: DepthLevel[] = ["intuition", "bridge", "academic"];

/** Which physical framework a lesson operates in. Every Phase 1 lesson is "Classical". */
export type ScopeBadge =
  | "Classical"
  | "Quantum"
  | "Global Symmetry"
  | "Gauge Theory"
  | "Standard Model";

export type ChapterMeta = {
  id: ChapterId;
  order: number;
  title: string;
  status: ChapterStatus;
  /** The single unavoidable question this chapter answers. */
  guidingQuestion: string;
  lessonRange: [number, number];
};

export type EquationBlock = {
  label?: string;
  expression: string;
  note?: string;
};

export type IntuitionContent = {
  paragraphs: string[];
  analogy?: {
    title: string;
    body: string;
  };
};

export type DerivationStep = {
  statement: string;
  equation?: string;
};

export type MathematicalBridgeContent = {
  intro: string;
  steps: DerivationStep[];
  result: EquationBlock;
};

export type AcademicDepthContent = {
  assumptions: string[];
  notation: string[];
  derivation: DerivationStep[];
  formalStatement: EquationBlock;
  limitations: string[];
};

export type Misconception = {
  claim: string;
  correction: string;
};

export type UnderstandingCheckOption = {
  id: string;
  label: string;
  correct: boolean;
  feedback: string;
};

export type UnderstandingCheckContent = {
  prompt: string;
  options: UnderstandingCheckOption[];
};

export type TransferQuestion = {
  prompt: string;
  answer: string;
};

export type SourceId = "tong-qft" | "mit-8323" | "pdg-higgs" | "beekman-ssb";

export type SourceReference = {
  id: SourceId;
  note?: string;
};

export type InteractiveWidget =
  | { kind: "discretized-string" }
  | { kind: "variation-bump" }
  | { kind: "natural-units-toggle" };

export type Lesson = {
  id: string;
  number: number;
  chapterId: ChapterId;
  title: string;
  scope: ScopeBadge;
  guidingQuestion: string;
  bigIdea: string;
  whyWeNeedThis: string;
  intuition: IntuitionContent;
  mathematicalBridge: MathematicalBridgeContent;
  academicDepth: AcademicDepthContent;
  misconception: Misconception;
  understandingCheck: UnderstandingCheckContent;
  transferQuestion: TransferQuestion;
  nextQuestion: string;
  references: SourceReference[];
  prerequisites: number[];
  interactive?: InteractiveWidget;
};

/** A node in the full 21-lesson dependency graph. Lessons outside Phase 1
 * are represented as locked stubs (title/content not yet written). */
export type LessonNode = {
  number: number;
  chapterId: ChapterId;
  title: string;
  status: ChapterStatus;
  prerequisites: number[];
};

export type SourceCatalogEntry = {
  id: SourceId;
  title: string;
  author: string;
  url: string;
};
