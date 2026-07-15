import { useId, useMemo, useState } from "react";

const WIDTH = 560;
const HEIGHT = 220;
const PADDING = 24;
const SAMPLE_COUNT = 240;
const BUMP_WIDTH = 0.05;

function forceFunction(t: number): number {
  return Math.sin(2 * Math.PI * t);
}

function bumpFunction(t: number, center: number): number {
  const distance = (t - center) / BUMP_WIDTH;
  return Math.exp(-0.5 * distance * distance);
}

function scaleX(t: number): number {
  return PADDING + t * (WIDTH - PADDING * 2);
}

function scaleY(value: number): number {
  return HEIGHT / 2 - value * (HEIGHT / 2 - PADDING);
}

function buildPath(fn: (t: number) => number): string {
  return Array.from({ length: SAMPLE_COUNT }, (_, index) => {
    const t = index / (SAMPLE_COUNT - 1);
    return `${index === 0 ? "M" : "L"} ${scaleX(t)} ${scaleY(fn(t))}`;
  }).join(" ");
}

export function VariationBumpDemo() {
  const [center, setCenter] = useState(0.2);
  const sliderId = useId();

  const integral = useMemo(() => {
    const dt = 1 / (SAMPLE_COUNT - 1);
    let total = 0;

    for (let index = 0; index < SAMPLE_COUNT; index += 1) {
      const t = index / (SAMPLE_COUNT - 1);
      const weight = index === 0 || index === SAMPLE_COUNT - 1 ? 0.5 : 1;
      total += weight * forceFunction(t) * bumpFunction(t, center) * dt;
    }

    return total;
  }, [center]);

  const forcePath = useMemo(() => buildPath(forceFunction), []);
  const bumpPath = useMemo(() => buildPath((t) => bumpFunction(t, center)), [center]);
  const nearZero = Math.abs(integral) < 0.01;

  return (
    <div className="interactive-widget variation-bump-demo">
      <div className="interactive-widget-heading">
        <p className="interactive-widget-label">Interactive · the movable test-function bump</p>
      </div>

      <svg
        className="variation-bump-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`Bump centered at t = ${center.toFixed(2)}, with integral of F times the bump equal to ${integral.toFixed(3)}`}
      >
        <line
          className="plot-axis"
          x1={PADDING}
          y1={HEIGHT / 2}
          x2={WIDTH - PADDING}
          y2={HEIGHT / 2}
        />

        <path className="bump-force-path" d={forcePath} />
        <path className="bump-eta-path" d={bumpPath} />

        <line
          className="bump-center-line"
          x1={scaleX(center)}
          y1={PADDING}
          x2={scaleX(center)}
          y2={HEIGHT - PADDING}
        />

        <text className="axis-label" x={WIDTH - PADDING} y={HEIGHT / 2 - 8} textAnchor="end">
          F(t)
        </text>
      </svg>

      <div className="interactive-widget-controls">
        <label htmlFor={sliderId}>
          Bump position t₀
          <strong>{center.toFixed(2)}</strong>
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={center}
          onChange={(event) => setCenter(Number(event.target.value))}
        />
      </div>

      <p className="interactive-widget-caption">
        Dragging the bump η(t) (violet) along the time axis changes ∫ F(t)
        η(t) dt (cyan curve is F(t)).{" "}
        <strong>∫ F(t)η(t) dt ≈ {integral.toFixed(3)}</strong>
        {" — "}
        {nearZero
          ? "near zero only because the bump happens to sit where F(t) ≈ 0."
          : "clearly nonzero here, which is exactly why F(t) must vanish at every t for δS = 0 to hold for every possible bump."}
      </p>
    </div>
  );
}
