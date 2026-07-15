import { useState } from "react";

type UnitEquation = {
  label: string;
  natural: string;
  restored: string;
};

const EQUATIONS: UnitEquation[] = [
  {
    label: "Klein–Gordon equation",
    natural: "(□ + m²) φ = 0",
    restored: "[ (1/c²) ∂ₜ² − ∇² + (mc/ħ)² ] φ = 0",
  },
  {
    label: "Dispersion relation",
    natural: "E² = p² + m²",
    restored: "E² = p²c² + m²c⁴",
  },
];

export function NaturalUnitsToggle() {
  const [natural, setNatural] = useState(true);

  return (
    <div className="interactive-widget natural-units-toggle">
      <div className="interactive-widget-heading">
        <p className="interactive-widget-label">Interactive · natural units</p>
        <button
          type="button"
          className="unit-toggle-button"
          aria-pressed={!natural}
          onClick={() => setNatural((value) => !value)}
        >
          {natural ? "Showing: c = ħ = 1" : "Showing: c, ħ restored"}
        </button>
      </div>

      <dl className="unit-equation-list">
        {EQUATIONS.map((equation) => (
          <div key={equation.label} className="unit-equation-row">
            <dt>{equation.label}</dt>
            <dd>
              <code>{natural ? equation.natural : equation.restored}</code>
            </dd>
          </div>
        ))}
      </dl>

      <p className="interactive-widget-caption">
        Natural units set c = ħ = 1, so factors of c and ħ simply don't
        appear — they aren't zero, they're defined away by the choice of
        units. Toggling restores them by dimensional analysis: a time
        derivative needs a factor of 1/c to match a spatial derivative, and a
        mass needs a factor of c/ħ to match an inverse length.
      </p>
    </div>
  );
}
