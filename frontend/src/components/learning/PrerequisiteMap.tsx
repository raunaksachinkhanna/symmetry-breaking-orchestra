import { useState } from "react";
import { CHAPTERS, LESSON_NODES } from "../../data/academicLearningPath";
import type { LessonNode } from "../../types/learning";

type PrerequisiteMapProps = {
  currentLessonNumber: number;
  onSelectLesson: (lessonNumber: number) => void;
  onClose: () => void;
};

export function PrerequisiteMap({
  currentLessonNumber,
  onSelectLesson,
  onClose,
}: PrerequisiteMapProps) {
  const [focusedNumber, setFocusedNumber] = useState<number>(currentLessonNumber);

  const focusedNode = LESSON_NODES.find((node) => node.number === focusedNumber);

  const prerequisiteNodes: LessonNode[] =
    focusedNode?.prerequisites
      .map((number) => LESSON_NODES.find((node) => node.number === number))
      .filter((node): node is LessonNode => Boolean(node)) ?? [];

  return (
    <div
      className="prerequisite-map-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="prerequisite-map"
        role="dialog"
        aria-modal="true"
        aria-label="Prerequisite map"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="prerequisite-map-heading">
          <h2>Concept-dependency map</h2>
          <button type="button" className="map-close-button" onClick={onClose}>
            Close
          </button>
        </div>

        <p className="prerequisite-map-caption">
          Every chapter's lessons, in order. Available lessons are
          selectable; lessons in chapters still in development are shown
          locked.
        </p>

        <div className="prerequisite-map-grid">
          {CHAPTERS.map((chapter) => {
            const nodesInChapter = LESSON_NODES.filter(
              (node) => node.chapterId === chapter.id
            );

            return (
              <div key={chapter.id} className="map-chapter-row">
                <div className="map-chapter-label">
                  <span className={`map-chapter-letter chapter-${chapter.id}`}>
                    {chapter.id}
                  </span>
                  <span className="map-chapter-title">{chapter.title}</span>
                </div>

                <div className="map-chapter-nodes">
                  {nodesInChapter.map((node) => {
                    const isAvailable = node.status === "available";
                    const isCurrent = node.number === currentLessonNumber;
                    const isFocused = node.number === focusedNumber;

                    return (
                      <button
                        key={node.number}
                        type="button"
                        className={[
                          "map-node",
                          isAvailable ? "available" : "locked",
                          isCurrent ? "current" : "",
                          isFocused ? "focused" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        disabled={!isAvailable}
                        aria-current={isCurrent ? "true" : undefined}
                        onClick={() => setFocusedNumber(node.number)}
                      >
                        {node.number}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {focusedNode && (
          <div className="map-detail-panel" aria-live="polite">
            <p className="map-detail-title">
              Lesson {focusedNode.number}
              {focusedNode.status === "available" ? `: ${focusedNode.title}` : " — in development"}
            </p>

            {prerequisiteNodes.length > 0 ? (
              <div className="map-detail-prerequisites">
                <span>Requires:</span>
                {prerequisiteNodes.map((node) => (
                  <button
                    key={node.number}
                    type="button"
                    className="map-prerequisite-chip"
                    onClick={() => setFocusedNumber(node.number)}
                  >
                    Lesson {node.number}
                    {node.status === "available" ? ` · ${node.title}` : ""}
                  </button>
                ))}
              </div>
            ) : (
              <p className="map-detail-prerequisites">No prerequisites — a valid entry point.</p>
            )}

            <button
              type="button"
              className="map-go-button"
              disabled={focusedNode.status !== "available"}
              onClick={() => {
                onSelectLesson(focusedNode.number);
                onClose();
              }}
            >
              {focusedNode.status === "available" ? "Go to this lesson" : "In development"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
