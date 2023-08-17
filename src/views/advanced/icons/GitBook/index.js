import React, { forwardRef } from "react"
import SvgGitbookSvgrepoCom from "./GitbookSvgrepoCom"

export const GitBookIcon = forwardRef((props, ref) => {
  return <SvgGitbookSvgrepoCom ref={ref} {...props} />
})
