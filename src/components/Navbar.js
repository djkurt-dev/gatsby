import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import "../styles/global.css"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site(siteMetadata: {}) {
        siteMetadata {
          copyright
          title
          description
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  )
}
