/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/header"
import Footer from "./Footer"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({  children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // console.log('current', currentPage)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main >
          {children}
        </main>
       <Footer  />
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
