export type SymmetryPhase = "SYMMETRIC" | "BROKEN";

export type ModelParameters = {
  muSquared: number;
  lambda: number;
};

export type ModelState = {
  phase: SymmetryPhase;
  vacuumExpectationValue: number;
  vacuumRadius: number;
  higgsMassSquared: number;
  higgsMass: number;
  goldstoneMassSquared: number;
  goldstoneMass: number;
};

export function calculateModel({
  muSquared,
  lambda,
}: ModelParameters): ModelState {
  if (lambda <= 0) {
    throw new Error("Lambda must be greater than zero.");
  }

  if (muSquared >= 0) {
    const mass = Math.sqrt(muSquared);

    return {
      phase: "SYMMETRIC",
      vacuumExpectationValue: 0,
      vacuumRadius: 0,
      higgsMassSquared: muSquared,
      higgsMass: mass,
      goldstoneMassSquared: muSquared,
      goldstoneMass: mass,
    };
  }

  const vacuumExpectationValue = Math.sqrt(
    -muSquared / lambda
  );

  const vacuumRadius =
    vacuumExpectationValue / Math.sqrt(2);

  const higgsMassSquared = -2 * muSquared;

  return {
    phase: "BROKEN",
    vacuumExpectationValue,
    vacuumRadius,
    higgsMassSquared,
    higgsMass: Math.sqrt(higgsMassSquared),
    goldstoneMassSquared: 0,
    goldstoneMass: 0,
  };
}