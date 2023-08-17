import React, { forwardRef } from "react"
import SvgHfLogo from "./HfLogo"

export const HuggingFaceIcon = forwardRef((props, ref) => {
  return <SvgHfLogo ref={ref} {...props} />
})
