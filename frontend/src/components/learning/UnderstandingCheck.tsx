import { useId, useState } from "react";
import type { UnderstandingCheckContent } from "../../types/learning";

type UnderstandingCheckProps = {
  check: UnderstandingCheckContent;
};

export function UnderstandingCheck({ check }: UnderstandingCheckProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const groupId = useId();

  const selectedOption = check.options.find(
    (option) => option.id === selectedId
  );

  return (
    <section className="understanding-check" aria-label="Understanding check">
      <p className="understanding-check-label">Understanding check</p>
      <p className="understanding-check-prompt">{check.prompt}</p>

      <div className="understanding-check-options" role="radiogroup" aria-label={check.prompt}>
        {check.options.map((option) => {
          const isSelected = option.id === selectedId;

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              name={groupId}
              className={
                isSelected
                  ? option.correct
                    ? "check-option selected correct"
                    : "check-option selected incorrect"
                  : "check-option"
              }
              onClick={() => setSelectedId(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        {selectedOption && (
          <p
            className={
              selectedOption.correct
                ? "understanding-check-feedback correct"
                : "understanding-check-feedback incorrect"
            }
          >
            <span aria-hidden="true">{selectedOption.correct ? "✓" : "✕"} </span>
            {selectedOption.feedback}
          </p>
        )}
      </div>
    </section>
  );
}
