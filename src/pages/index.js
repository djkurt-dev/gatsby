import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/home.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Frontend Software Engineer based in Philippines.</p>
          <Link className="btn" to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      relativePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
