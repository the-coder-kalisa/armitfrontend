import React, { forwardRef } from "react"
import SvgSupabaseIcon from "./SupabaseIcon"

export const SupabaseIcon = forwardRef((props, ref) => {
  return <SvgSupabaseIcon ref={ref} {...props} />
})
