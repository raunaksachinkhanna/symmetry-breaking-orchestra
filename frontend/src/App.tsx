import { useMemo, useState } from "react";
import "./App.css";
import { calculateModel } from "./physics/model";
import { PotentialPlot } from "./components/PotentialPlot";

function App() {
  const [muSquared, setMuSquared] = useState(-1);
  const [lambda, setLambda] = useState(0.5);

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
      <p className="eyebrow">
        Interactive Physics Laboratory
      </p>

      <h1>Symmetry-Breaking Orchestra</h1>

      <p className="subtitle">
        Change the parameters of a mathematical universe and watch its
        vacuum, symmetry and particle spectrum respond.
      </p>

      <section className="panel">
        <div className="control">
          <div className="control-heading">
            <label htmlFor="mu">
              Model parameter μ²
            </label>

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

        <div className="control lambda-control">
          <div className="control-heading">
            <label htmlFor="lambda">
              Self-coupling λ
            </label>

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

        <div className="result">
          <span>Current phase</span>

          <strong
            className={isBroken ? "broken" : "symmetric"}
          >
            {isBroken
              ? "Broken symmetry"
              : "Symmetric"}
          </strong>
        </div>
      </section>

      <PotentialPlot
        muSquared={muSquared}
        lambda={lambda}
        vacuumRadius={model.vacuumRadius}
        phase={model.phase}
      />

      <section className="physics-grid">
        <article className="physics-card">
          <span>Vacuum expectation value</span>

          <strong>
            {model.vacuumExpectationValue.toFixed(3)}
          </strong>

          <small>v</small>
        </article>

        <article className="physics-card">
          <span>Vacuum radius</span>

          <strong>
            {model.vacuumRadius.toFixed(3)}
          </strong>

          <small>|φ|</small>
        </article>

        <article className="physics-card">
          <span>Higgs-like mass</span>

          <strong>
            {model.higgsMass.toFixed(3)}
          </strong>

          <small>mₕ</small>
        </article>

        <article className="physics-card">
          <span>Goldstone mass</span>

          <strong>
            {model.goldstoneMass.toFixed(3)}
          </strong>

          <small>mᴳ</small>
        </article>
      </section>
    </main>
  );
}

export default App;