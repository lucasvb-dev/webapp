import { SPACE_TOKENS, spaceVar, type SpaceToken } from "../tokenLists";

function SpaceRow({ token }: { token: SpaceToken }) {
  return (
    <div className="design-system__space-row">
      <div
        className="design-system__space-bar"
        style={{ width: spaceVar(token) }}
      />
      <p className="design-system__space-label text-caption">
        <span className="design-system__space-amount">{token}</span>
        <span className="design-system__token-label text-caption">space-{token}</span>
      </p>
    </div>
  );
}

export function SpaceSection() {
  return (
    <section className="design-system__section" id="space">
      <h2 className="design-system__section-title text-title-smallest">Space</h2>
      {SPACE_TOKENS.map((token) => (
        <SpaceRow key={token} token={token} />
      ))}
    </section>
  );
}
