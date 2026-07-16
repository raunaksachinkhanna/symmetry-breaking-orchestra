import { CHAPTERS } from "../../data/academicLearningPath";
import { domainForChapter } from "./chapterVisuals";

type CurriculumHomeProps = {
  onOpenLesson: (lessonNumber: number) => void;
};

export function CurriculumHome({ onOpenLesson }: CurriculumHomeProps) {
  return (
    <div className="curriculum-home">
      <div className="curriculum-intro">
        <p className="curriculum-eyebrow">Academic learning path</p>
        <h2 className="curriculum-heading">A concept-dependency course in field theory</h2>
        <p className="curriculum-description">
          Five chapters, twenty-one lessons, three depth levels each — from
          why physics needs fields at all, through action and field
          equations, quantization, global symmetry breaking, and the Higgs
          mechanism. Open a chapter to begin; a prerequisite map inside
          every lesson lets you jump to any dependency directly.
        </p>
      </div>

      <div className="chapter-grid">
        {CHAPTERS.map((chapter) => {
          const isAvailable = chapter.status === "available";
          const lessonCount = chapter.lessonRange[1] - chapter.lessonRange[0] + 1;
          const domain = domainForChapter(chapter.id);

          return (
            <button
              key={chapter.id}
              type="button"
              className={isAvailable ? "chapter-card available" : "chapter-card locked"}
              data-domain={domain}
              disabled={!isAvailable}
              onClick={() => onOpenLesson(chapter.lessonRange[0])}
            >
              <span className="chapter-card-heading">
                <span className="chapter-letter" data-domain={domain} data-status={chapter.status}>
                  {chapter.id}
                </span>
                <span className="chapter-title">{chapter.title}</span>
              </span>

              {isAvailable ? (
                <span className="chapter-meta">
                  <span className="chapter-lesson-count">{lessonCount} lessons</span>
                  <span className="chapter-dots" aria-hidden="true">
                    {Array.from({ length: lessonCount }, (_, index) => (
                      <span key={index} className="chapter-dot" />
                    ))}
                  </span>
                </span>
              ) : (
                <>
                  <span className="chapter-status">In development</span>
                  <span className="chapter-guiding-question">{chapter.guidingQuestion}</span>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
