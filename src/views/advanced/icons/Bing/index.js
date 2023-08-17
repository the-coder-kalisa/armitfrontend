import React, { forwardRef } from "react"
import SvgBing from "./Bing"

export const BingIcon = forwardRef((props, ref) => {
  return <SvgBing ref={ref} {...props} />
})
