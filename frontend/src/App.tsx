import { useMemo, useState } from "react";
import "./App.css";
import { calculateModel } from "./physics/model";
import { PotentialPlot } from "./components/PotentialPlot";
import { VacuumManifold } from "./components/VacuumManifold";

function App() {
  const [muSquared, setMuSquared] = useState(-1);
  const [lambda, setLambda] = useState(0.5);
  const [vacuumAngle, setVacuumAngle] = useState(35);

  const model = useMemo(
    () =>
      calculateModel({
        muSquared,
        lambda,
      }),
    [muSquared, lambda]
  );

  const isBroken = model.phase === "BROKEN";
  const isCritical = model.phase === "CRITICAL";

  const phaseLabel = isBroken
    ? "Broken symmetry"
    : isCritical
      ? "Critical boundary"
      : "Symmetric";

  const phaseExplanation = isBroken
    ? "A circle of equal-energy vacua appears, so the field selects a direction. Radial motion is massive while angular motion is the massless Goldstone mode."
    : isCritical
      ? "The vacuum remains at the origin, but the quadratic curvature vanishes. Both field modes are massless at this boundary."
      : "The origin is the unique vacuum and the U(1) symmetry remains unbroken. The two field components are degenerate massive modes."

  const applyPreset = (nextMuSquared: number) => {
    setMuSquared(nextMuSquared);
    setLambda(0.5);
  };

  return (
    <main className="app">
      <header className="app-header">
        <div className="title-row">
          <h1>Symmetry-Breaking Orchestra</h1>
          <span className="alpha-badge">Alpha</span>
        </div>

        <p className="model-label">Global U(1) educational model</p>

        <p className="subtitle">
          Explore how field parameters reshape the vacuum and particle spectrum.
        </p>
      </header>

      <section className="dashboard" aria-label="Interactive physics dashboard">
        <aside className="panel controls-panel" aria-label="Model controls">
          <div className="panel-heading">
            <p>Parameters</p>
            <h2>Model controls</h2>
          </div>

          <div className="presets" aria-label="Phase presets">
            <button
              type="button"
              className={model.phase === "SYMMETRIC" ? "active" : ""}
              aria-pressed={model.phase === "SYMMETRIC"}
              onClick={() => applyPreset(1)}
            >
              Symmetric
            </button>

            <button
              type="button"
              className={isCritical ? "active" : ""}
              aria-pressed={isCritical}
              onClick={() => applyPreset(0)}
            >
              Critical
            </button>

            <button
              type="button"
              className={isBroken ? "active" : ""}
              aria-pressed={isBroken}
              onClick={() => applyPreset(-1)}
            >
              Broken
            </button>
          </div>

          <div className="controls-list">
            <div className="control">
              <div className="control-heading">
                <label htmlFor="mu">Model parameter μ²</label>
                <strong>{muSquared.toFixed(2)}</strong>
              </div>

              <input
                id="mu"
                type="range"
                min="-3"
                max="3"
                step="0.05"
                value={muSquared}
                onChange={(event) =>
                  setMuSquared(Number(event.target.value))
                }
              />
            </div>

            <div className="control">
              <div className="control-heading">
                <label htmlFor="lambda">Self-coupling λ</label>
                <strong>{lambda.toFixed(2)}</strong>
              </div>

              <input
                id="lambda"
                type="range"
                min="0.1"
                max="2"
                step="0.05"
                value={lambda}
                onChange={(event) =>
                  setLambda(Number(event.target.value))
                }
              />
            </div>

            <div className="control">
              <div className="control-heading">
                <label htmlFor="vacuum-angle">Vacuum angle θ</label>
                <strong>
                  {isBroken ? `${vacuumAngle.toFixed(0)}°` : "Not selected"}
                </strong>
              </div>

              <input
                id="vacuum-angle"
                type="range"
                min="0"
                max="360"
                step="1"
                value={vacuumAngle}
                disabled={!isBroken}
                onChange={(event) =>
                  setVacuumAngle(Number(event.target.value))
                }
              />
            </div>
          </div>

          <div className="result" aria-live="polite">
            <span>Current phase</span>
            <strong className={model.phase.toLowerCase()}>
              {phaseLabel}
            </strong>
          </div>
        </aside>

        <div className="workspace">
          <div className="visual-grid">
            <PotentialPlot
              muSquared={muSquared}
              lambda={lambda}
              vacuumRadius={model.vacuumRadius}
              phase={model.phase}
            />

            <VacuumManifold
              phase={model.phase}
              vacuumRadius={model.vacuumRadius}
              angleDegrees={vacuumAngle}
            />
          </div>

          <section className="physics-grid" aria-label="Calculated quantities">
            <article className="physics-card">
              <span>Vacuum expectation value</span>
              <strong>{model.vacuumExpectationValue.toFixed(3)}</strong>
              <small>v</small>
            </article>

            <article className="physics-card">
              <span>Vacuum radius</span>
              <strong>{model.vacuumRadius.toFixed(3)}</strong>
              <small>|φ|</small>
            </article>

            <article className="physics-card">
              <span>
                {isBroken ? "Higgs-like radial mode" : "Field mode 1"}
              </span>
              <strong>{model.higgsMass.toFixed(3)}</strong>
              <small>
                {isBroken
                  ? "mₕ · radial"
                  : isCritical
                    ? "m₁ · massless"
                    : "m₁ · degenerate"}
              </small>
            </article>

            <article className="physics-card">
              <span>
                {isBroken ? "Goldstone angular mode" : "Field mode 2"}
              </span>
              <strong>{model.goldstoneMass.toFixed(3)}</strong>
              <small>
                {isBroken
                  ? "mᴳ · angular"
                  : isCritical
                    ? "m₂ · massless"
                    : "m₂ · degenerate"}
              </small>
            </article>
          </section>

          <section className="live-explanation" aria-live="polite">
            <div>
              <strong>{phaseLabel}</strong>
              <p>{phaseExplanation}</p>
            </div>

            <p className="scope-note">
              Dimensionless classical toy model · Global U(1) symmetry · Not
              the full Standard Model Higgs sector.
            </p>
          </section>
        </div>
      </section>

      <footer className="app-footer">
        <span>Global U(1) educational model</span>

        <a
          href="https://github.com/raunaksachinkhanna/symmetry-breaking-orchestra"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>

        <span>Under active development</span>
      </footer>
    </main>
  );
}

export default App;
