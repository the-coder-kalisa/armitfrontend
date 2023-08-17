import React, { forwardRef } from "react"
import SvgIfixitSeeklogocom from "./IfixitSeeklogoCom"

export const IFixIcon = forwardRef((props, ref) => {
  return <SvgIfixitSeeklogocom ref={ref} {...props} />
})
