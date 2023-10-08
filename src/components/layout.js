import React from "react"
import "./layout.scss"

export default function Layout({ children }) {
  return (
    <div>
      <title>Markus</title>
      {children}
    </div>
  )
}