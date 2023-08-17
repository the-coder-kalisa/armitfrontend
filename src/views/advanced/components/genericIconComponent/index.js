import { nodeIconsLucide } from "../../utils/styleUtils"

export default function IconComponent({ name, className, iconColor }) {
  const TargetIcon = nodeIconsLucide[name] ?? nodeIconsLucide["unknown"]
  return <TargetIcon className={className} style={{ color: iconColor }} />
}
