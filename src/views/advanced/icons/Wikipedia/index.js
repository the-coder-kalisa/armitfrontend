import React, { forwardRef } from "react"
import SvgWikipedia from "./Wikipedia"

export const WikipediaIcon = forwardRef((props, ref) => {
  return <SvgWikipedia ref={ref} {...props} />
})
