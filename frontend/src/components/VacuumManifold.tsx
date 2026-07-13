import { useId } from "react";
import type { SymmetryPhase } from "../physics/model";

type VacuumManifoldProps = {
  phase: SymmetryPhase;
  vacuumRadius: number;
  angleDegrees: number;
};

const SIZE = 360;
const CENTRE = SIZE / 2;

export function VacuumManifold({
  phase,
  vacuumRadius,
  angleDegrees,
}: VacuumManifoldProps) {
  const idPrefix = useId().replace(/:/g, "");
  const ringGradientId = `${idPrefix}-vacuum-ring-gradient`;
  const ringGlowId = `${idPrefix}-vacuum-ring-glow`;
  const pointGradientId = `${idPrefix}-vacuum-point-gradient`;
  const pointGlowId = `${idPrefix}-vacuum-point-glow`;
  const isBroken = phase === "BROKEN";

  const displayRadius = isBroken
    ? Math.min(115, 58 + vacuumRadius * 24)
    : 0;

  const angleRadians =
    (angleDegrees * Math.PI) / 180;

  const selectedX =
    CENTRE + displayRadius * Math.cos(angleRadians);

  const selectedY =
    CENTRE - displayRadius * Math.sin(angleRadians);

  return (
    <section className="visual-panel vacuum-panel">
      <div className="plot-heading">
        <div>
          <p className="plot-label">Vacuum state</p>
          <h2>U(1) vacuum manifold</h2>
        </div>

        <span
          className={
            isBroken
              ? "phase-badge broken-badge"
              : phase === "CRITICAL"
                ? "phase-badge critical-badge"
                : "phase-badge symmetric-badge"
          }
        >
          {isBroken
            ? `Selected angle: ${angleDegrees.toFixed(0)}°`
            : phase === "CRITICAL"
              ? "Critical origin"
              : "Unique vacuum"}
        </span>
      </div>

      <div className="vacuum-layout">
        <svg
          className="vacuum-svg"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label={
            isBroken
              ? `Circular U(1) vacuum manifold with a selected vacuum at ${angleDegrees.toFixed(0)} degrees`
              : phase === "CRITICAL"
                ? "Critical U(1) boundary with the vacuum at the origin and vanishing quadratic curvature"
                : "Symmetric U(1) phase with a unique vacuum at the origin"
          }
        >
          <defs>
            <linearGradient
              id={ringGradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#63eaff" />
              <stop offset="50%" stopColor="#ac78ff" />
              <stop offset="100%" stopColor="#ff76cf" />
            </linearGradient>

            <radialGradient id={pointGradientId}>
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#ffd568" />
              <stop offset="100%" stopColor="#ff8e5d" />
            </radialGradient>

            <filter id={ringGlowId}>
              <feGaussianBlur stdDeviation="5" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id={pointGlowId}>
              <feGaussianBlur
                stdDeviation="6"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            className="vacuum-grid-circle"
            cx={CENTRE}
            cy={CENTRE}
            r="130"
          />

          <circle
            className="vacuum-grid-circle"
            cx={CENTRE}
            cy={CENTRE}
            r="70"
          />

          <line
            className="vacuum-axis"
            x1="35"
            y1={CENTRE}
            x2={SIZE - 35}
            y2={CENTRE}
          />

          <line
            className="vacuum-axis"
            x1={CENTRE}
            y1="35"
            x2={CENTRE}
            y2={SIZE - 35}
          />

          {isBroken && (
            <>
              <circle
                className="vacuum-ring-glow"
                cx={CENTRE}
                cy={CENTRE}
                r={displayRadius}
              />

              <circle
                className="vacuum-ring"
                cx={CENTRE}
                cy={CENTRE}
                r={displayRadius}
                stroke={`url(#${ringGradientId})`}
                filter={`url(#${ringGlowId})`}
              />

              <line
                className="vacuum-selection-line"
                x1={CENTRE}
                y1={CENTRE}
                x2={selectedX}
                y2={selectedY}
              />
            </>
          )}

          <circle
            className={
              isBroken
                ? "vacuum-selected-point"
                : "vacuum-origin-point"
            }
            cx={isBroken ? selectedX : CENTRE}
            cy={isBroken ? selectedY : CENTRE}
            r={isBroken ? 8 : 10}
            fill={
              isBroken
                ? `url(#${pointGradientId})`
                : "#70efff"
            }
            filter={`url(#${pointGlowId})`}
          />

          <text
            className="axis-label"
            x={SIZE - 43}
            y={CENTRE - 10}
            textAnchor="end"
          >
            Re(φ)
          </text>

          <text
            className="axis-label"
            x={CENTRE + 12}
            y="48"
          >
            Im(φ)
          </text>
        </svg>

        <div className="vacuum-explanation">
          <div>
            <span>Vacuum radius</span>
            <strong>{vacuumRadius.toFixed(3)}</strong>
          </div>

          <p>
            {isBroken
              ? "Every point on this circle has the same minimum energy. The field selects one vacuum."
              : phase === "CRITICAL"
                ? "The vacuum remains at the origin while the quadratic curvature vanishes."
                : "The field has one minimum at the origin, so no vacuum direction is selected."}
          </p>

          <code>
            φ → eᶦᵅφ
          </code>
        </div>
      </div>
    </section>
  );
}
