import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import Header from './header'
import '../../styles/layout.css'
import '../../styles/global.css'

const Footer = styled.footer`
  background: #092545;
  color: #fff;
  padding: 2rem 0;
  margin: 0;
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  p {
    margin: 0;
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer>
        <Container>
          <p>
            © {new Date().getFullYear()}, Timothy Krechel |{' '}
            <Link to="/">Imprint</Link>
          </p>
        </Container>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
