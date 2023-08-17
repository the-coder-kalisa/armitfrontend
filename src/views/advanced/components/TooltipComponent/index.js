import { LightTooltip } from "../LightTooltipComponent"

export default function Tooltip({ children, title, placement }) {
  return (
    <LightTooltip placement={placement} title={title} arrow>
      {children}
    </LightTooltip>
  )
}
