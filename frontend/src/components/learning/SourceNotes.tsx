import { SOURCE_CATALOG } from "../../data/academicLearningPath";
import type { SourceReference } from "../../types/learning";

type SourceNotesProps = {
  references: SourceReference[];
};

export function SourceNotes({ references }: SourceNotesProps) {
  const citedIds = new Set(references.map((reference) => reference.id));
  const noteById = new Map(references.map((reference) => [reference.id, reference.note]));

  return (
    <details className="source-notes">
      <summary>Academic sources</summary>

      <ul className="source-list">
        {SOURCE_CATALOG.map((source) => {
          const cited = citedIds.has(source.id);
          const note = noteById.get(source.id);

          return (
            <li
              key={source.id}
              className={cited ? "source-item cited" : "source-item"}
            >
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
              <span className="source-author">{source.author}</span>
              {cited && (
                <span className="source-cited-badge">
                  Cited in this lesson
                </span>
              )}
              {note && <p className="source-note">{note}</p>}
            </li>
          );
        })}
      </ul>
    </details>
  );
}
