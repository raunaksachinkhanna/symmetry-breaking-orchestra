import type { DepthLevel } from "../../types/learning";

type DepthSelectorProps = {
  depth: DepthLevel;
  onChange: (depth: DepthLevel) => void;
};

const DEPTH_OPTIONS: { id: DepthLevel; label: string; hint: string }[] = [
  {
    id: "intuition",
    label: "Intuition",
    hint: "Plain-language meaning, no unexplained notation",
  },
  {
    id: "bridge",
    label: "Mathematical Bridge",
    hint: "The shortest correct derivation",
  },
  {
    id: "academic",
    label: "Academic Depth",
    hint: "Assumptions, full notation and limitations",
  },
];

export function DepthSelector({ depth, onChange }: DepthSelectorProps) {
  return (
    <div className="depth-selector" role="tablist" aria-label="Depth level">
      {DEPTH_OPTIONS.map((option) => {
        const active = option.id === depth;

        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            id={`depth-tab-${option.id}`}
            aria-selected={active}
            aria-controls={`depth-panel-${option.id}`}
            className={active ? "depth-tab active" : "depth-tab"}
            onClick={() => onChange(option.id)}
          >
            <span className="depth-tab-label">{option.label}</span>
            <span className="depth-tab-hint">{option.hint}</span>
          </button>
        );
      })}
    </div>
  );
}
