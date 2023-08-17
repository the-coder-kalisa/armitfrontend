import React, { forwardRef } from "react"
import SvgPineconeLogo from "./PineconeLogo"

export const PineconeIcon = forwardRef((props, ref) => {
  return <SvgPineconeLogo ref={ref} {...props} />
})
