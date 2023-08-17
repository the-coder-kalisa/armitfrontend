import React, { forwardRef } from "react"
import SvgNotionLogo from "./NotionLogo"

export const NotionIcon = forwardRef((props, ref) => {
  return <SvgNotionLogo ref={ref} {...props} />
})
