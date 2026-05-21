import { Icon } from "../../components/Icon";
import { icons, type IconName } from "../../icons";

type IconDocCellVariant = "icon" | "illustration";

export function IconDocCell({
  name,
  variant,
}: {
  name: IconName;
  variant: IconDocCellVariant;
}) {
  const cellClass =
    variant === "illustration"
      ? "design-system__asset-cell design-system__asset-cell--illustration"
      : "design-system__asset-cell design-system__asset-cell--icon";

  return (
    <div className={cellClass}>
      <div className="design-system__asset-frame">
        {variant === "icon" ? (
          <Icon name={name} />
        ) : (
          <IllustrationPreview name={name} />
        )}
      </div>
      <p className="design-system__token-label text-caption">{name}</p>
    </div>
  );
}

function IllustrationPreview({ name }: { name: IconName }) {
  const Svg = icons[name];

  return <Svg focusable="false" aria-hidden />;
}
