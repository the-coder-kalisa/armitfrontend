"use client"
import React from "react"
import { Tooltip as ReactTooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"
import { classNames } from "../../utils/utils"

const TooltipReact = ({
  selector,
  content,
  disabled,
  position = "top",
  children,
  htmlContent,
  className,
  clickable,
  delayShow
}) => {
  return (
    <div className="tooltip-container">
      {React.cloneElement(children, {
        "data-tooltip-id": selector
      })}
      <ReactTooltip
        id={selector}
        content={content}
        className={classNames(
          "z-[9999] !bg-white !text-xs !font-normal !text-foreground !opacity-100 !shadow-md",
          className
        )}
        place={position}
        clickable={clickable}
        isOpen={disabled ? false : undefined}
        delayShow={delayShow}
        positionStrategy="absolute"
        float={true}
      >
        {htmlContent && htmlContent}
      </ReactTooltip>
    </div>
  )
}

export default TooltipReact
