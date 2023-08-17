import React, { forwardRef } from "react"
import SvgWolfram from "./Wolfram"

export const WolframIcon = forwardRef((props, ref) => {
  return <SvgWolfram ref={ref} {...props} />
})
