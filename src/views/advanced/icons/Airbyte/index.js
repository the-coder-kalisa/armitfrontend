import React, { forwardRef } from "react"
import SvgAirbyte from "./Airbyte"

export const AirbyteIcon = forwardRef((props, ref) => {
  return <SvgAirbyte ref={ref} {...props} />
})
