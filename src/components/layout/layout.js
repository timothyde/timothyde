import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

const Main = styled.main`
  transition: all 0.4s ease;
`

const Layout = ({ children }) => {
  const highlighted = false

  return (
    <>
      <Header />
      <Main className={highlighted ? `dark` : ``}>{children}</Main>
      <Footer>
        <Container>
          <p>
            © {new Date().getFullYear()}, Timothy Krechel |{' '}
            <Link to="/imprint/">Impressum</Link>
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
