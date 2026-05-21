import {
  PALETTE_COLOR_TOKENS,
  paletteColorVar,
  type PaletteColorToken,
} from "../tokenLists";

function ColorSwatch({ token }: { token: PaletteColorToken }) {
  return (
    <div className="design-system__swatch">
      <div
        className="design-system__swatch-box"
        style={{ background: paletteColorVar(token) }}
      />
      <p className="design-system__token-label text-caption">{token}</p>
    </div>
  );
}

export function ColorsSection() {
  return (
    <section className="design-system__section" id="colors">
      <h2 className="design-system__section-title text-title-smallest">Colors</h2>
      <div className="design-system__flex-grid">
        {PALETTE_COLOR_TOKENS.map((token) => (
          <ColorSwatch key={token} token={token} />
        ))}
      </div>
    </section>
  );
}
