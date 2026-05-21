import { Fragment, type ReactNode } from "react";
import { DesignSystemToolbar } from "./DesignSystemToolbar";
import { ColorsSection } from "./sections/ColorsSection";
import { IconsSection } from "./sections/IconsSection";
import { IllustrationsSection } from "./sections/IllustrationsSection";
import { RadiusSection } from "./sections/RadiusSection";
import { SpaceSection } from "./sections/SpaceSection";
import { TypographySection } from "./sections/TypographySection";
import "./design-system.css";

type DesignSystemSection = {
  id: string;
  render: () => ReactNode;
};

const SECTIONS: DesignSystemSection[] = [
  { id: "colors", render: () => <ColorsSection /> },
  { id: "typography", render: () => <TypographySection /> },
  { id: "space", render: () => <SpaceSection /> },
  { id: "radius", render: () => <RadiusSection /> },
  { id: "icons", render: () => <IconsSection /> },
  { id: "illustrations", render: () => <IllustrationsSection /> },
];

export default function DesignSystemScreen() {
  return (
    <div className="design-system">
      <main className="design-system__main">
        <h1 className="design-system__page-title text-title-smallest">Design System</h1>
        {SECTIONS.map((section) => (
          <Fragment key={section.id}>{section.render()}</Fragment>
        ))}
      </main>
      <DesignSystemToolbar />
    </div>
  );
}
