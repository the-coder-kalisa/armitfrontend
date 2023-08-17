import React, { forwardRef } from "react"
import SvgSerper from "./Serper"

export const SerperIcon = forwardRef((props, ref) => {
  return <SvgSerper ref={ref} {...props} />
})
