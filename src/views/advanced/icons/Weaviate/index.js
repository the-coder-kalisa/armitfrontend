import React, { forwardRef } from "react"
import SvgWeaviate from "./Weaviate"

export const WeaviateIcon = forwardRef((props, ref) => {
  return <SvgWeaviate ref={ref} {...props} />
})
