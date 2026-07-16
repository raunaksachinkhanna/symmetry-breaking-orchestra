import { getChapter } from "../../data/academicLearningPath";
import type { Lesson } from "../../types/learning";
import { domainForChapter } from "./chapterVisuals";

const TOTAL_LESSON_COUNT = 21;

type LessonBreadcrumbProps = {
  lesson: Lesson;
  onReturnHome: () => void;
  onNavigate: (lessonNumber: number) => void;
  canGoPrev: boolean;
  canGoNext: boolean;
};

export function LessonBreadcrumb({
  lesson,
  onReturnHome,
  onNavigate,
  canGoPrev,
  canGoNext,
}: LessonBreadcrumbProps) {
  const chapter = getChapter(lesson.chapterId);
  const domain = domainForChapter(lesson.chapterId);

  return (
    <nav className="lesson-breadcrumb" aria-label="Lesson navigation">
      <button type="button" className="breadcrumb-home-button" onClick={onReturnHome}>
        ← Curriculum
      </button>

      <button
        type="button"
        className="breadcrumb-chapter-button"
        onClick={onReturnHome}
      >
        <span className="breadcrumb-chapter-letter" data-domain={domain}>
          {lesson.chapterId}
        </span>
        <span className="breadcrumb-chapter-title">{chapter?.title}</span>
      </button>

      <span className="breadcrumb-progress">
        Lesson {lesson.number} of {TOTAL_LESSON_COUNT}
      </span>

      <div className="breadcrumb-nav-controls">
        <button
          type="button"
          className="breadcrumb-nav-button"
          disabled={!canGoPrev}
          onClick={() => onNavigate(lesson.number - 1)}
          aria-label="Previous lesson"
        >
          ‹
        </button>
        <button
          type="button"
          className="breadcrumb-nav-button"
          disabled={!canGoNext}
          onClick={() => onNavigate(lesson.number + 1)}
          aria-label="Next lesson"
        >
          ›
        </button>
      </div>
    </nav>
  );
}
