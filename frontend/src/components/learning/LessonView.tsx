import { LESSON_NODES } from "../../data/academicLearningPath";
import type { DepthLevel, Lesson } from "../../types/learning";
import { DepthSelector } from "./DepthSelector";
import { FrontierClaims } from "./FrontierClaims";
import { MathematicalBridge } from "./MathematicalBridge";
import { MisconceptionCard } from "./MisconceptionCard";
import { SourceNotes } from "./SourceNotes";
import { UnderstandingCheck } from "./UnderstandingCheck";
import { DiscretizedStringDemo } from "./interactive/DiscretizedStringDemo";
import { FourierModesDemo } from "./interactive/FourierModesDemo";
import { GaugeComparisonDemo } from "./interactive/GaugeComparisonDemo";
import { NaturalUnitsToggle } from "./interactive/NaturalUnitsToggle";
import { VariationBumpDemo } from "./interactive/VariationBumpDemo";

type LessonViewProps = {
  lesson: Lesson;
  depth: DepthLevel;
  onDepthChange: (depth: DepthLevel) => void;
  onNavigate: (lessonNumber: number) => void;
  onOpenMap: () => void;
  onOpenLaboratory: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
};

const SCOPE_CLASS: Record<Lesson["scope"], string> = {
  Classical: "scope-classical",
  Quantum: "scope-quantum",
  "Global Symmetry": "scope-global-symmetry",
  "Gauge Theory": "scope-gauge-theory",
  "Standard Model": "scope-standard-model",
};

export function LessonView({
  lesson,
  depth,
  onDepthChange,
  onNavigate,
  onOpenMap,
  onOpenLaboratory,
  canGoPrev,
  canGoNext,
}: LessonViewProps) {
  const prerequisiteTitles = lesson.prerequisites.map((number) => {
    const node = LESSON_NODES.find((candidate) => candidate.number === number);
    return { number, title: node?.title ?? `Lesson ${number}` };
  });

  return (
    <article className="lesson-view">
      <header className="lesson-header">
        <div className="lesson-meta-row">
          <span className="lesson-location">
            Chapter {lesson.chapterId} · Lesson {lesson.number}
          </span>
          <span className={`scope-badge ${SCOPE_CLASS[lesson.scope]}`}>
            {lesson.scope}
          </span>
        </div>

        <h2 className="lesson-question">{lesson.guidingQuestion}</h2>
        <p className="lesson-title">{lesson.title}</p>

        {prerequisiteTitles.length > 0 && (
          <p className="lesson-prerequisites">
            Builds on:{" "}
            {prerequisiteTitles.map((prerequisite, index) => (
              <span key={prerequisite.number}>
                {index > 0 && ", "}
                <button
                  type="button"
                  className="prerequisite-link"
                  onClick={() => onNavigate(prerequisite.number)}
                >
                  Lesson {prerequisite.number} · {prerequisite.title}
                </button>
              </span>
            ))}
          </p>
        )}
      </header>

      <section className="big-idea-card">
        <p className="big-idea-label">Big idea</p>
        <p className="big-idea-text">{lesson.bigIdea}</p>
      </section>

      <section className="why-section">
        <p className="section-label">Why we need this</p>
        <p>{lesson.whyWeNeedThis}</p>
      </section>

      {lesson.frontierClaims && <FrontierClaims claims={lesson.frontierClaims} />}

      <DepthSelector depth={depth} onChange={onDepthChange} />

      <div className="depth-panels">
        {depth === "intuition" && (
          <div
            className="depth-panel"
            role="tabpanel"
            id="depth-panel-intuition"
            aria-labelledby="depth-tab-intuition"
          >
            {lesson.intuition.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {lesson.intuition.analogy && (
              <div className="analogy-card">
                <p className="analogy-title">{lesson.intuition.analogy.title}</p>
                <p>{lesson.intuition.analogy.body}</p>
              </div>
            )}

            {lesson.interactive?.kind === "discretized-string" && (
              <DiscretizedStringDemo key={lesson.id} />
            )}
            {lesson.interactive?.kind === "variation-bump" && (
              <VariationBumpDemo key={lesson.id} />
            )}
            {lesson.interactive?.kind === "fourier-modes" && <FourierModesDemo key={lesson.id} />}
            {lesson.interactive?.kind === "gauge-dof-comparison" && (
              <GaugeComparisonDemo key={lesson.id} />
            )}
          </div>
        )}

        {depth === "bridge" && (
          <div
            className="depth-panel"
            role="tabpanel"
            id="depth-panel-bridge"
            aria-labelledby="depth-tab-bridge"
          >
            <MathematicalBridge content={lesson.mathematicalBridge}>
              {lesson.interactive?.kind === "natural-units-toggle" && (
                <NaturalUnitsToggle key={lesson.id} />
              )}
            </MathematicalBridge>
          </div>
        )}

        {depth === "academic" && (
          <div
            className="depth-panel"
            role="tabpanel"
            id="depth-panel-academic"
            aria-labelledby="depth-tab-academic"
          >
            <div className="academic-block">
              <p className="academic-block-label">Assumptions</p>
              <ul>
                {lesson.academicDepth.assumptions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="academic-block">
              <p className="academic-block-label">Notation</p>
              <ul>
                {lesson.academicDepth.notation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="academic-block">
              <p className="academic-block-label">Derivation</p>
              <ol className="bridge-steps">
                {lesson.academicDepth.derivation.map((step, index) => (
                  <li key={index} className="bridge-step">
                    <p className="bridge-step-statement">{step.statement}</p>
                    {step.equation && (
                      <code className="bridge-step-equation">{step.equation}</code>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bridge-result">
              {lesson.academicDepth.formalStatement.label && (
                <p className="equation-block-label">
                  {lesson.academicDepth.formalStatement.label}
                </p>
              )}
              <code className="equation-block-expression">
                {lesson.academicDepth.formalStatement.expression}
              </code>
              {lesson.academicDepth.formalStatement.note && (
                <p className="equation-block-note">
                  {lesson.academicDepth.formalStatement.note}
                </p>
              )}
            </div>

            <div className="academic-block">
              <p className="academic-block-label">Limitations and scope</p>
              <ul>
                {lesson.academicDepth.limitations.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <MisconceptionCard misconception={lesson.misconception} />

      <UnderstandingCheck key={lesson.id} check={lesson.understandingCheck} />

      <section className="transfer-question">
        <p className="section-label">Transfer question</p>
        <p>{lesson.transferQuestion.prompt}</p>
        <details key={lesson.id}>
          <summary>Reveal a sample answer</summary>
          <p>{lesson.transferQuestion.answer}</p>
        </details>
      </section>

      <section className="next-question-banner">
        <p className="section-label">Next inevitable question</p>
        <p>{lesson.nextQuestion}</p>
      </section>

      {lesson.labConnection && (
        <section className="lab-connection-card">
          <p className="section-label">Laboratory connection</p>
          <p>{lesson.labConnection.sentence}</p>
          <button type="button" className="lab-connection-button" onClick={onOpenLaboratory}>
            {lesson.labConnection.buttonLabel}
          </button>
        </section>
      )}

      {lesson.plannedLabConnection && (
        <section className="lab-connection-card planned" aria-label="Planned laboratory, not yet available">
          <p className="section-label">Laboratory connection · planned</p>
          <p>{lesson.plannedLabConnection.sentence}</p>
          <button type="button" className="lab-connection-button planned" disabled>
            {lesson.plannedLabConnection.buttonLabel}
          </button>
          <p className="planned-lab-note">{lesson.plannedLabConnection.explanation}</p>
        </section>
      )}

      <SourceNotes references={lesson.references} />

      <footer className="lesson-footer">
        <button
          type="button"
          className="lesson-nav-button"
          disabled={!canGoPrev}
          onClick={() => onNavigate(lesson.number - 1)}
        >
          ← Previous lesson
        </button>

        <button type="button" className="prerequisite-map-button" onClick={onOpenMap}>
          Prerequisite map
        </button>

        <button
          type="button"
          className="lesson-nav-button"
          disabled={!canGoNext}
          onClick={() => onNavigate(lesson.number + 1)}
        >
          Next lesson →
        </button>
      </footer>
    </article>
  );
}
