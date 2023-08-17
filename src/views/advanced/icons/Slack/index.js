import React, { forwardRef } from "react"
import SvgSlackIcon from "./SlackIcon"

export const SlackIcon = forwardRef((props, ref) => {
  return <SvgSlackIcon ref={ref} {...props} />
})
