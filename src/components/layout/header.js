import React from 'react'
import styled from 'styled-components'

import signature from '../../images/signature.svg'

let Header = styled.header`
  position: fixed;
  top: 0px;
  max-height: 100px;
  z-index: 999;
  width: 100%;
  background: none;
  overflow: hidden;
  background: #fff;
  padding: 25px 0px 25px;
  transition: all ease 0.5s;
`

let Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 740px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
`

let Logo = styled.img`
  /* font-size: 22px;
  color: #c8d6df; */
  display: inline-block;
  margin: 0;
  margin-right: 1rem;
  padding: 0;
  width: 60px;
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
      <Logo src={signature} />
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
