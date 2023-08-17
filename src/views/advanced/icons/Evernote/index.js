import React, { forwardRef } from "react"
import SvgEvernoteIcon from "./EvernoteIcon"

export const EvernoteIcon = forwardRef((props, ref) => {
  return <SvgEvernoteIcon ref={ref} {...props} />
})
