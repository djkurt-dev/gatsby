import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import "../../styles/projects.css"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Websites and Projects I've Created</h3>

        <div className="projects">
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

//export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
      }
    }
  }
`
