import { useState } from "react";
import "./learning-path.css";
import { getLessonByNumber } from "../../data/academicLearningPath";
import type { DepthLevel } from "../../types/learning";
import { CurriculumHome } from "./CurriculumHome";
import { LessonView } from "./LessonView";
import { PrerequisiteMap } from "./PrerequisiteMap";

const FIRST_LESSON = 1;
const LAST_IMPLEMENTED_LESSON = 21;

type Screen = "home" | "lesson";

type AcademicLearningPathProps = {
  onOpenLaboratory: () => void;
};

export function AcademicLearningPath({ onOpenLaboratory }: AcademicLearningPathProps) {
  // Opening (or re-entering) the learning path always starts at the
  // curriculum home — see the design-pass report for why this default was
  // chosen over resuming the last open lesson.
  const [screen, setScreen] = useState<Screen>("home");
  const [lessonNumber, setLessonNumber] = useState(FIRST_LESSON);
  const [depth, setDepth] = useState<DepthLevel>("intuition");
  const [mapOpen, setMapOpen] = useState(false);

  const lesson = getLessonByNumber(lessonNumber);

  const handleOpenLesson = (nextLessonNumber: number) => {
    if (!getLessonByNumber(nextLessonNumber)) {
      return;
    }

    setLessonNumber(nextLessonNumber);
    setScreen("lesson");
  };

  const handleNavigate = (nextLessonNumber: number) => {
    if (!getLessonByNumber(nextLessonNumber)) {
      return;
    }

    setLessonNumber(nextLessonNumber);
  };

  const handleReturnHome = () => {
    setScreen("home");
  };

  return (
    <section className="learning-path" aria-label="Academic learning path">
      {screen === "home" && <CurriculumHome onOpenLesson={handleOpenLesson} />}

      {screen === "lesson" &&
        (lesson ? (
          <LessonView
            lesson={lesson}
            depth={depth}
            onDepthChange={setDepth}
            onNavigate={handleNavigate}
            onReturnHome={handleReturnHome}
            onOpenMap={() => setMapOpen(true)}
            onOpenLaboratory={onOpenLaboratory}
            canGoPrev={lessonNumber > FIRST_LESSON}
            canGoNext={lessonNumber < LAST_IMPLEMENTED_LESSON}
          />
        ) : (
          <p className="learning-path-empty">This lesson is not yet available.</p>
        ))}

      {mapOpen && (
        <PrerequisiteMap
          currentLessonNumber={lessonNumber}
          onSelectLesson={handleOpenLesson}
          onClose={() => setMapOpen(false)}
        />
      )}
    </section>
  );
}
