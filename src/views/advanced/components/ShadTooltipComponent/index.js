import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default function ShadTooltip({
  content,
  side,
  asChild = true,
  children,
  styleClasses,
  delayDuration = 500
}) {
  return (
    <Tooltip delayDuration={delayDuration}>
      <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>

      <TooltipContent
        className={styleClasses}
        side={side}
        avoidCollisions={false}
        sticky="always"
      >
        {content}
      </TooltipContent>
    </Tooltip>
  )
}
