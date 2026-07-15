import type { Misconception } from "../../types/learning";

type MisconceptionCardProps = {
  misconception: Misconception;
};

export function MisconceptionCard({ misconception }: MisconceptionCardProps) {
  return (
    <section className="misconception-card" aria-label="Common misconception">
      <p className="misconception-label">Common misconception</p>
      <p className="misconception-claim">
        <span aria-hidden="true">✕ </span>
        {misconception.claim}
      </p>
      <p className="misconception-correction">
        <span aria-hidden="true">✓ </span>
        {misconception.correction}
      </p>
    </section>
  );
}
