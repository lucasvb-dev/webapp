import { RADIUS_TOKENS, radiusVar, type RadiusToken } from "../tokenLists";

function RadiusSample({ token }: { token: RadiusToken }) {
  return (
    <div className="design-system__swatch">
      <div
        className="design-system__radius-box"
        style={{ borderRadius: radiusVar(token) }}
      />
      <p className="design-system__token-label text-caption">{token}</p>
    </div>
  );
}

export function RadiusSection() {
  return (
    <section className="design-system__section" id="radius">
      <h2 className="design-system__section-title text-title-smallest">
        Border radius
      </h2>
      <div className="design-system__flex-grid">
        {RADIUS_TOKENS.map((token) => (
          <RadiusSample key={token} token={token} />
        ))}
      </div>
    </section>
  );
}
