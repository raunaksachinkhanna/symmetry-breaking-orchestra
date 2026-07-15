import { useState } from "react";

type Chip = {
  id: string;
  label: string;
  detail: string;
  muted?: boolean;
};

const GLOBAL_CHIPS: Chip[] = [
  {
    id: "global-h",
    label: "Radial mode h — massive",
    detail: "m_h² = 2λv². An independent, physical particle (Lesson 15).",
  },
  {
    id: "global-pi",
    label: "Angular mode π — massless Goldstone",
    detail:
      "m_π² = 0. A genuinely independent, physical massless particle in the purely global theory (Lessons 15–16).",
  },
];

const GAUGED_CHIPS: Chip[] = [
  {
    id: "gauged-h",
    label: "Radial mode h — massive",
    detail: "m_h² = 2λv², unchanged from the global case — still an independent physical particle.",
  },
  {
    id: "gauged-A",
    label: "Vector field Aμ — massive",
    detail:
      "m_A = gv. Carries 3 physical polarizations: the 2 ordinary transverse ones, plus 1 new longitudinal polarization that a massless vector field is not allowed to have.",
  },
  {
    id: "gauged-pi",
    label: "Angular mode π — absorbed",
    detail:
      "No longer an independent physical field. Its would-be motion becomes Aμ's new longitudinal polarization — not deleted, reorganized. See the count below.",
    muted: true,
  },
];

export function GaugeComparisonDemo() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const renderChip = (chip: Chip) => {
    const expanded = expandedId === chip.id;

    return (
      <li key={chip.id}>
        <button
          type="button"
          className={chip.muted ? "gauge-chip muted" : "gauge-chip"}
          aria-expanded={expanded}
          onClick={() => toggle(chip.id)}
        >
          {chip.label}
        </button>
        {expanded && <p className="gauge-chip-detail">{chip.detail}</p>}
      </li>
    );
  };

  return (
    <div className="interactive-widget gauge-comparison-demo">
      <div className="interactive-widget-heading">
        <p className="interactive-widget-label">Interactive · global vs. gauged U(1)</p>
      </div>

      <div className="gauge-comparison-columns">
        <div className="gauge-comparison-column">
          <p className="gauge-comparison-column-title">Global U(1)</p>
          <ul className="gauge-chip-list">{GLOBAL_CHIPS.map(renderChip)}</ul>
          <p className="gauge-comparison-total">Physical degrees of freedom: 2</p>
        </div>

        <div className="gauge-comparison-column">
          <p className="gauge-comparison-column-title">Gauged U(1)</p>
          <ul className="gauge-chip-list">{GAUGED_CHIPS.map(renderChip)}</ul>
          <p className="gauge-comparison-total">Physical degrees of freedom: 1 + 3 = 4</p>
        </div>
      </div>

      <p className="gauge-comparison-summary">
        Degrees of freedom are conserved, not destroyed: 2 (scalar) + 2 (massless vector) →
        1 (scalar) + 3 (massive vector) = 4 = 4.
      </p>

      <p className="interactive-widget-caption">
        Click any degree of freedom above to see what it is and where its mass comes from.
      </p>
    </div>
  );
}
