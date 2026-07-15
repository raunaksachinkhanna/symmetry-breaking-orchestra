import { CHAPTERS, LESSON_NODES } from "../../data/academicLearningPath";

type ChapterNavigatorProps = {
  currentLessonNumber: number;
  onSelectLesson: (lessonNumber: number) => void;
};

export function ChapterNavigator({
  currentLessonNumber,
  onSelectLesson,
}: ChapterNavigatorProps) {
  return (
    <nav className="chapter-navigator" aria-label="Curriculum chapters">
      {CHAPTERS.map((chapter) => {
        const nodesInChapter = LESSON_NODES.filter(
          (node) => node.chapterId === chapter.id
        );

        const isAvailable = chapter.status === "available";

        return (
          <div
            key={chapter.id}
            className={
              isAvailable ? "chapter-card available" : "chapter-card locked"
            }
          >
            <div className="chapter-card-heading">
              <span className={`chapter-letter chapter-${chapter.id}`}>
                {chapter.id}
              </span>
              <div>
                <p className="chapter-title">{chapter.title}</p>
                <p className="chapter-status">
                  {isAvailable
                    ? `Lessons ${chapter.lessonRange[0]}–${chapter.lessonRange[1]}`
                    : "In development"}
                </p>
              </div>
            </div>

            {isAvailable ? (
              <div className="chapter-lesson-pips" role="tablist" aria-label={`${chapter.title} lessons`}>
                {nodesInChapter.map((node) => {
                  const active = node.number === currentLessonNumber;

                  return (
                    <button
                      key={node.number}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      className={active ? "lesson-pip active" : "lesson-pip"}
                      onClick={() => onSelectLesson(node.number)}
                      title={node.title}
                    >
                      {node.number}
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="chapter-guiding-question">
                {chapter.guidingQuestion}
              </p>
            )}
          </div>
        );
      })}
    </nav>
  );
}
