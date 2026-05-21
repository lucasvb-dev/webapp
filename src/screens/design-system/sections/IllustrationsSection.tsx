import { IconDocCell } from "../IconDocCell";
import { DESIGN_SYSTEM_ILLUSTRATION_NAMES } from "../tokenLists";

export function IllustrationsSection() {
  return (
    <section className="design-system__section" id="illustrations">
      <h2 className="design-system__section-title text-title-smallest">
        Illustrations
      </h2>
      <div className="design-system__flex-grid">
        {DESIGN_SYSTEM_ILLUSTRATION_NAMES.map((name) => (
          <IconDocCell key={name} name={name} variant="illustration" />
        ))}
      </div>
    </section>
  );
}
