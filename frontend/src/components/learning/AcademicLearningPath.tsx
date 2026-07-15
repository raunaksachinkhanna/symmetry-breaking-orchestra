import { useState } from "react";
import "./learning-path.css";
import { getLessonByNumber } from "../../data/academicLearningPath";
import type { DepthLevel } from "../../types/learning";
import { ChapterNavigator } from "./ChapterNavigator";
import { LessonView } from "./LessonView";
import { PrerequisiteMap } from "./PrerequisiteMap";

const FIRST_LESSON = 1;
const LAST_IMPLEMENTED_LESSON = 21;

type AcademicLearningPathProps = {
  onOpenLaboratory: () => void;
};

export function AcademicLearningPath({ onOpenLaboratory }: AcademicLearningPathProps) {
  const [lessonNumber, setLessonNumber] = useState(FIRST_LESSON);
  const [depth, setDepth] = useState<DepthLevel>("intuition");
  const [mapOpen, setMapOpen] = useState(false);

  const lesson = getLessonByNumber(lessonNumber);

  const handleNavigate = (nextLessonNumber: number) => {
    if (!getLessonByNumber(nextLessonNumber)) {
      return;
    }

    setLessonNumber(nextLessonNumber);
  };

  return (
    <section className="learning-path" aria-label="Academic learning path">
      <ChapterNavigator
        currentLessonNumber={lessonNumber}
        onSelectLesson={handleNavigate}
      />

      {lesson ? (
        <LessonView
          lesson={lesson}
          depth={depth}
          onDepthChange={setDepth}
          onNavigate={handleNavigate}
          onOpenMap={() => setMapOpen(true)}
          onOpenLaboratory={onOpenLaboratory}
          canGoPrev={lessonNumber > FIRST_LESSON}
          canGoNext={lessonNumber < LAST_IMPLEMENTED_LESSON}
        />
      ) : (
        <p className="learning-path-empty">
          This lesson is not yet available.
        </p>
      )}

      {mapOpen && (
        <PrerequisiteMap
          currentLessonNumber={lessonNumber}
          onSelectLesson={handleNavigate}
          onClose={() => setMapOpen(false)}
        />
      )}
    </section>
  );
}
