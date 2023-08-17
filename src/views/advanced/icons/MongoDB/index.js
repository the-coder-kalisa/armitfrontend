import React, { forwardRef } from "react"
import SvgMongodbIcon from "./MongodbIcon"

export const MongoDBIcon = forwardRef((props, ref) => {
  return <SvgMongodbIcon ref={ref} {...props} />
})
