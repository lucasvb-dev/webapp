import {
  FONT_WEIGHT_CLASSES,
  TEXT_STYLE_CLASSES,
  type FontWeightClass,
} from "../tokenLists";

export function TypographySection() {
  return (
    <section className="design-system__section" id="typography">
      <h2 className="design-system__section-title text-title-smallest">Typography</h2>

      {TEXT_STYLE_CLASSES.map((className) => (
        <div className="design-system__type-row" key={className}>
          <p className={className}>{className}</p>
        </div>
      ))}

      {FONT_WEIGHT_CLASSES.map((className: FontWeightClass) => (
        <div className="design-system__type-row" key={className}>
          <p className={`text-body ${className}`}>{className}</p>
        </div>
      ))}
    </section>
  );
}
