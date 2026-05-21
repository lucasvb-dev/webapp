import { IconDocCell } from "../IconDocCell";
import { DESIGN_SYSTEM_ICON_NAMES } from "../tokenLists";

export function IconsSection() {
  return (
    <section className="design-system__section" id="icons">
      <h2 className="design-system__section-title text-title-smallest">Icons</h2>
      <div className="design-system__flex-grid">
        {DESIGN_SYSTEM_ICON_NAMES.map((name) => (
          <IconDocCell key={name} name={name} variant="icon" />
        ))}
      </div>
    </section>
  );
}
