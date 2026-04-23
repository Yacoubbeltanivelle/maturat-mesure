import type { IconKey } from "@/lib/data";
import type { LucideIcon, LucideProps } from "lucide-react";
import {
  Cable,
  FlaskConical,
  Gauge,
  Leaf,
  Pipette,
  Waves,
  Wind,
  Zap,
} from "lucide-react";

export const iconMap: Record<IconKey, LucideIcon> = {
  air: Wind,
  instrumentation: Gauge,
  control: Waves,
  energy: Zap,
  calibration: Cable,
  liquid: FlaskConical,
  sampling: Pipette,
  environment: Leaf,
};

export function getIcon(icon: IconKey) {
  return iconMap[icon];
}

export function IconMark({
  icon,
  ...props
}: LucideProps & {
  icon: IconKey;
}) {
  const Icon = iconMap[icon];
  return <Icon {...props} />;
}
