import { useMemo } from "react";
import type { SymmetryPhase } from "../physics/model";

type PotentialPlotProps = {
  muSquared: number;
  lambda: number;
  vacuumRadius: number;
  phase: SymmetryPhase;
};

type Point = {
  x: number;
  potential: number;
};

const WIDTH = 760;
const HEIGHT = 320;
const PADDING = 38;
const SAMPLE_COUNT = 260;

function calculatePotential(
  fieldValue: number,
  muSquared: number,
  lambda: number
) {
  return (
    muSquared * fieldValue ** 2 +
    lambda * fieldValue ** 4
  );
}

export function PotentialPlot({
  muSquared,
  lambda,
  vacuumRadius,
  phase,
}: PotentialPlotProps) {
  const plot = useMemo(() => {
    const xLimit = Math.max(2.2, vacuumRadius * 1.8);

    const points: Point[] = Array.from(
      { length: SAMPLE_COUNT },
      (_, index) => {
        const progress = index / (SAMPLE_COUNT - 1);
        const x = -xLimit + progress * 2 * xLimit;

        return {
          x,
          potential: calculatePotential(
            x,
            muSquared,
            lambda
          ),
        };
      }
    );

    const potentialValues = points.map(
      (point) => point.potential
    );

    const minimumPotential = Math.min(
      ...potentialValues
    );

    const maximumPotential = Math.max(
      ...potentialValues
    );

    const potentialRange = Math.max(
      maximumPotential - minimumPotential,
      0.001
    );

    const lowerBound =
      minimumPotential - potentialRange * 0.12;

    const upperBound =
      maximumPotential + potentialRange * 0.08;

    const scaleX = (x: number) =>
      PADDING +
      ((x + xLimit) / (2 * xLimit)) *
        (WIDTH - PADDING * 2);

    const scaleY = (potential: number) =>
      PADDING +
      ((upperBound - potential) /
        (upperBound - lowerBound)) *
        (HEIGHT - PADDING * 2);

    const path = points
      .map((point, index) => {
        const command = index === 0 ? "M" : "L";

        return `${command} ${scaleX(point.x)} ${scaleY(
          point.potential
        )}`;
      })
      .join(" ");

    const vacuumPositions =
      phase === "BROKEN"
        ? [-vacuumRadius, vacuumRadius]
        : [0];

    return {
      path,
      scaleX,
      scaleY,
      vacuumPositions,
      xAxisY: scaleY(0),
      centreX: scaleX(0),
    };
  }, [muSquared, lambda, vacuumRadius, phase]);

  return (
    <section className="visual-panel">
      <div className="plot-heading">
        <div>
          <p className="plot-label">
            Field potential
          </p>

          <h2>Energy landscape</h2>
        </div>

        <span
          className={
            phase === "BROKEN"
              ? "phase-badge broken-badge"
              : "phase-badge symmetric-badge"
          }
        >
          {phase === "BROKEN"
            ? "Broken symmetry"
            : "Symmetric"}
        </span>
      </div>

      <svg
        className="potential-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Field potential graph"
      >
        <defs>
          <linearGradient
            id="potential-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#63eaff" />
            <stop offset="50%" stopColor="#ac78ff" />
            <stop offset="100%" stopColor="#ff76cf" />
          </linearGradient>

          <filter id="potential-glow">
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line
          className="plot-axis"
          x1={PADDING}
          y1={plot.xAxisY}
          x2={WIDTH - PADDING}
          y2={plot.xAxisY}
        />

        <line
          className="plot-axis"
          x1={plot.centreX}
          y1={PADDING}
          x2={plot.centreX}
          y2={HEIGHT - PADDING}
        />

        <path
        className="potential-glow-line"
        d={plot.path}
        fill="none"
        />

        <path
        className="potential-line"
        d={plot.path}
        fill="none"
        />

        {plot.vacuumPositions.map((position) => {
          const potential = calculatePotential(
            position,
            muSquared,
            lambda
          );

          return (
            <g key={position}>
              <circle
                className="vacuum-halo"
                cx={plot.scaleX(position)}
                cy={plot.scaleY(potential)}
                r="14"
              />

              <circle
                className="vacuum-marker"
                cx={plot.scaleX(position)}
                cy={plot.scaleY(potential)}
                r="6"
              />
            </g>
          );
        })}

        <text
          className="axis-label"
          x={WIDTH - PADDING}
          y={plot.xAxisY - 10}
          textAnchor="end"
        >
          Field value φ
        </text>

        <text
          className="axis-label"
          x={plot.centreX + 12}
          y={PADDING + 6}
        >
          V(φ)
        </text>
      </svg>

      <div className="equation-row">
        <code>
          V(φ) = μ²|φ|² + λ|φ|⁴
        </code>

        <span>
          Glowing points show the preferred vacuum state.
        </span>
      </div>
    </section>
  );
}