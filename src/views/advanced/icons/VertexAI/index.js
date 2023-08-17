import React, { forwardRef } from "react"
import SvgVertexAi from "./VertexAi"

export const VertexAIIcon = forwardRef((props, ref) => {
  return <SvgVertexAi ref={ref} {...props} />
})
