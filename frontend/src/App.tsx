import { useState } from "react";
import "./App.css";

function App() {
  const [muSquared, setMuSquared] = useState(-1);

  const isBroken = muSquared < 0;

  return (
    <main className="app">
      <p className="eyebrow">Interactive Physics Laboratory</p>

      <h1>Symmetry-Breaking Orchestra</h1>

      <p className="subtitle">
        Change the laws of a small mathematical universe and watch its
        symmetry, vacuum and particle properties respond.
      </p>

      <section className="panel">
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

        <div className="result">
          <span>Current phase</span>
          <strong className={isBroken ? "broken" : "symmetric"}>
            {isBroken ? "Broken symmetry" : "Symmetric"}
          </strong>
        </div>
      </section>
    </main>
  );
}

export default App;