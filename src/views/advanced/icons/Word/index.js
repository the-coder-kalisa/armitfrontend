import React, { forwardRef } from "react"
import SvgWord from "./Word"

export const WordIcon = forwardRef((props, ref) => {
  return <SvgWord ref={ref} {...props} />
})
