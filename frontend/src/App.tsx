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
            <strong className={isBroken ? "broken" : "symmetric"}>
              {isBroken ? "Broken symmetry" : "Symmetric"}
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
              <span>Higgs-like mass</span>
              <strong>{model.higgsMass.toFixed(3)}</strong>
              <small>mₕ</small>
            </article>

            <article className="physics-card">
              <span>Goldstone mass</span>
              <strong>{model.goldstoneMass.toFixed(3)}</strong>
              <small>mᴳ</small>
            </article>
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
