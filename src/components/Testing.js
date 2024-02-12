import React from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import {useStaticQuery, graphql} from "gatsby"

const Testing = () => {
  const data = useStaticQuery(graphql`
    query ProjectsPage {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            stack
            title
          }
          id
        }
      }
    }
  `)
  const project = data.allMarkdownRemark.nodes
  console.log(data)

  return (
    <div>
      {project.map(project => (
        <a href={"/" + `${project.frontmatter.slug}`}key={project.id} style={{color: "black"}}>
          {project.frontmatter.slug}
        </a>
      ))}
    </div>
  )
}
export default Testing
