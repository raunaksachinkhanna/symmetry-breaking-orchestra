import { useId, useMemo, useState } from "react";

const WIDTH = 560;
const HEIGHT = 200;
const PADDING = 24;
const MIN_POINTS = 3;
const MAX_POINTS = 36;
const REFERENCE_SAMPLES = 200;

function targetShape(x: number): number {
  return 0.6 * Math.sin(2 * Math.PI * x) + 0.4 * Math.sin(4 * Math.PI * x + 1);
}

function scaleX(x: number): number {
  return PADDING + x * (WIDTH - PADDING * 2);
}

function scaleY(y: number): number {
  return HEIGHT / 2 - y * (HEIGHT / 2 - PADDING);
}

export function DiscretizedStringDemo() {
  const [pointCount, setPointCount] = useState(6);
  const sliderId = useId();

  const beadPoints = useMemo(
    () =>
      Array.from({ length: pointCount }, (_, index) => {
        const x = pointCount === 1 ? 0 : index / (pointCount - 1);
        return { x, y: targetShape(x) };
      }),
    [pointCount]
  );

  const referencePath = useMemo(() => {
    return Array.from({ length: REFERENCE_SAMPLES }, (_, index) => {
      const x = index / (REFERENCE_SAMPLES - 1);
      return `${index === 0 ? "M" : "L"} ${scaleX(x)} ${scaleY(targetShape(x))}`;
    }).join(" ");
  }, []);

  const beadPath = beadPoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${scaleX(point.x)} ${scaleY(point.y)}`)
    .join(" ");

  return (
    <div className="interactive-widget discretized-string-demo">
      <div className="interactive-widget-heading">
        <p className="interactive-widget-label">Interactive · discrete beads to continuous field</p>
      </div>

      <svg
        className="discretized-string-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`${pointCount} coupled beads approximating a continuous field`}
      >
        <line
          className="plot-axis"
          x1={PADDING}
          y1={HEIGHT / 2}
          x2={WIDTH - PADDING}
          y2={HEIGHT / 2}
        />

        <path className="string-reference-path" d={referencePath} />
        <path className="string-bead-path" d={beadPath} />

        {beadPoints.map((point, index) => (
          <circle
            key={index}
            className="string-bead-point"
            cx={scaleX(point.x)}
            cy={scaleY(point.y)}
            r="4.5"
          />
        ))}
      </svg>

      <div className="interactive-widget-controls">
        <label htmlFor={sliderId}>
          Number of coupled points N
          <strong>{pointCount}</strong>
        </label>
        <input
          id={sliderId}
          type="range"
          min={MIN_POINTS}
          max={MAX_POINTS}
          step={1}
          value={pointCount}
          onChange={(event) => setPointCount(Number(event.target.value))}
        />
      </div>

      <p className="interactive-widget-caption">
        Each dot is one coordinate qₙ(t) of a coupled-oscillator chain. As N
        grows, the piecewise-straight approximation (solid) converges toward
        the smooth field φ(x, t) (faint curve).
      </p>
    </div>
  );
}
