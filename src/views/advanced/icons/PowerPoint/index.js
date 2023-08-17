import React, { forwardRef } from "react"
import { ReactComponent as PowerPointSVG } from "./PowerPoint.svg"

export const PowerPointIcon = forwardRef((props, ref) => {
  return <PowerPointSVG ref={ref} {...props} />
})
