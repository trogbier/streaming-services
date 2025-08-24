import React from "react"
import "./Content.scss"

export default function Content(props) {
  const { children } = props
  return <div className="content">{children}</div>
}
