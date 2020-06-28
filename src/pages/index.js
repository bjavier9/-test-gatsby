import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <img
        height="300"
        src="https://media.metrolatam.com/2020/04/28/miakhalifaexactr-80d5e02e187b129353354c7853d22059-1200x800.jpg"
        alt="hola mundo"
      />
    </div>
  )
}
