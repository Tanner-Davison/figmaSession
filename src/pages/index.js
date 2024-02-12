import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageSection from "../components/pageSection"
import IphoneCTA from "../components/IphoneCTA"
import * as styles from "../components/index.module.css"


const PageSections = ({content}) =>{
  console.log("PageSections component rendering:", content)
  return(
    <div className={'page-content'}>
     { content.nodes.map((item, i)=>{ 
     console.log(item);
     return <PageSection key={i} section={item.relativePath}/>}
     )}
    </div>
  )
}
const HomePage = () => {

return (
  <StaticQuery
    query={graphql`
      query AllDataQuery {
        allFile {
          nodes {
            relativePath
          }
        }
      }
    `}
    render={ data => (
      <Layout>
        <PageSections content={data.allFile} />
      </Layout>
    )}
  />
)
}



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export default HomePage;

export const Head = () => <Seo title="Home" />





