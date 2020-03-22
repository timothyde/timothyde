import React from 'react'
import styled from 'styled-components'

let Header = styled.header`
  position: fixed;
  top: 0px;
  max-height: 100px;
  z-index: 999;
  width: 100%;
  background: none;
  overflow: hidden;
  background: #fff;
  padding: 45px 0px 25px;
  transition: all ease 0.5s;
`

let Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    width: 740px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
`

let Logo = styled.a`
  font-size: 22px;
  color: #c8d6df;
  display: inline-block;
  margin-right: 30px;
`

let Nav = styled.nav`
  display: inline-block;

  a {
    margin: 0 1rem;
    color: #092545;
  }
`

export default () => (
  <Header>
    <Container>
      <Logo href="/">Ty.</Logo>
      <Nav>
        <a href="/">Me</a>
        <a href="/">Bio</a>
        <a href="/">Showcase</a>
        <a href="/">Tools</a>
        <a href="/">Contact</a>
      </Nav>
    </Container>
  </Header>
)
