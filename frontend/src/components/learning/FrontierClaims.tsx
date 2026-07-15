import type { EpistemicStatus, FrontierClaim } from "../../types/learning";

type FrontierClaimsProps = {
  claims: FrontierClaim[];
};

const STATUS_LABEL: Record<EpistemicStatus, string> = {
  established: "Established result",
  "open-question": "Open research question",
  speculative: "Speculative idea",
};

const STATUS_CLASS: Record<EpistemicStatus, string> = {
  established: "frontier-established",
  "open-question": "frontier-open-question",
  speculative: "frontier-speculative",
};

export function FrontierClaims({ claims }: FrontierClaimsProps) {
  return (
    <section className="frontier-claims" aria-label="What is established, open, and speculative">
      <p className="section-label">Established, open, and speculative</p>

      <ul className="frontier-claim-list">
        {claims.map((claim, index) => (
          <li key={index} className="frontier-claim">
            <span className={`frontier-status-pill ${STATUS_CLASS[claim.status]}`}>
              {STATUS_LABEL[claim.status]}
            </span>
            <p>{claim.statement}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
