import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
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
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
