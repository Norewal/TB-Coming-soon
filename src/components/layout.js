/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
      <div
        style={{

        }}
      >
        <main
          style={{
            height: `100vh`,
          }}
        >
          {children}
        </main>
        {/*<footer
          style={{
            marginTop: `2rem`,
            color: `#080833`,
            textDecoration: `none`,
            bottom: 0,
          }}
        >
          © {new Date().getFullYear()},
          {` `}
          <a 
            style={{
              color: `#080833`,
              textDecoration: `none`
            }}
            href="https://www.gabriellajs.digital/">
              gabriellaJS
          </a>
        </footer>*/}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
