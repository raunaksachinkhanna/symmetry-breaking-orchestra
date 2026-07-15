import { useId, useMemo, useState } from "react";

const WIDTH = 560;
const HEIGHT = 220;
const PADDING = 24;
const SAMPLE_COUNT = 200;
const MODE_NUMBERS = [1, 2, 3, 4] as const;

// Restricted to the cyan/violet/magenta design palette: mode 4 uses a
// dimmed magenta rather than gold, kept distinguishable from mode 3's
// brighter magenta by lightness and saturation, not by hue.
const MODE_COLORS: Record<(typeof MODE_NUMBERS)[number], string> = {
  1: "#74edff",
  2: "#a96dff",
  3: "#ff76cf",
  4: "#b0559a",
};

function scaleX(x: number): number {
  return PADDING + x * (WIDTH - PADDING * 2);
}

function scaleY(y: number): number {
  return HEIGHT / 2 - y * (HEIGHT / 2 - PADDING) * 0.85;
}

function modeValue(n: number, x: number): number {
  return Math.sin(n * Math.PI * x);
}

function buildPath(fn: (x: number) => number): string {
  return Array.from({ length: SAMPLE_COUNT }, (_, index) => {
    const x = index / (SAMPLE_COUNT - 1);
    return `${index === 0 ? "M" : "L"} ${scaleX(x)} ${scaleY(fn(x))}`;
  }).join(" ");
}

export function FourierModesDemo() {
  const [amplitudes, setAmplitudes] = useState<number[]>([1, 0, 0, 0]);
  const idPrefix = useId();

  const composedPath = useMemo(
    () =>
      buildPath((x) =>
        MODE_NUMBERS.reduce(
          (sum, n, index) => sum + amplitudes[index] * modeValue(n, x),
          0
        )
      ),
    [amplitudes]
  );

  const modePaths = useMemo(
    () =>
      MODE_NUMBERS.map((n, index) => ({
        n,
        amplitude: amplitudes[index],
        path: buildPath((x) => amplitudes[index] * modeValue(n, x)),
      })),
    [amplitudes]
  );

  return (
    <div className="interactive-widget fourier-modes-demo">
      <div className="interactive-widget-heading">
        <p className="interactive-widget-label">
          Interactive · a field profile as a sum of independent modes
        </p>
      </div>

      <svg
        className="fourier-modes-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Composed field profile from four adjustable Fourier modes"
      >
        <line
          className="plot-axis"
          x1={PADDING}
          y1={HEIGHT / 2}
          x2={WIDTH - PADDING}
          y2={HEIGHT / 2}
        />

        {modePaths.map(({ n, amplitude, path }) => (
          <path
            key={n}
            className="fourier-mode-path"
            style={{ stroke: MODE_COLORS[n], opacity: amplitude === 0 ? 0.15 : 0.45 }}
            d={path}
          />
        ))}

        <path className="fourier-composed-path" d={composedPath} />
      </svg>

      <div className="fourier-mode-controls">
        {MODE_NUMBERS.map((n, index) => {
          const sliderId = `${idPrefix}-mode-${n}`;

          return (
            <div key={n} className="fourier-mode-row">
              <label htmlFor={sliderId} style={{ color: MODE_COLORS[n] }}>
                Mode n = {n}
                <strong>{amplitudes[index].toFixed(2)}</strong>
              </label>
              <input
                id={sliderId}
                type="range"
                min={-1}
                max={1}
                step={0.05}
                value={amplitudes[index]}
                onChange={(event) => {
                  const next = [...amplitudes];
                  next[index] = Number(event.target.value);
                  setAmplitudes(next);
                }}
              />
            </div>
          );
        })}
      </div>

      <p className="interactive-widget-caption">
        The cyan/violet/magenta/gold curves are individual modes sin(nπx),
        each with its own independent amplitude — its own oscillator. The
        bright curve is their sum: the field profile φ(x). Every adjustable
        amplitude here is exactly the kind of independent degree of freedom
        that quantization (next) turns into a discrete excitation number.
      </p>
    </div>
  );
}
