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
    position: relative;
    cursor: pointer;
    letter-spacing: -0.6px;
    font-size: 14px;

    &:before {
      content: '';
      position: absolute;
      top: calc(50% - -9px);
      left: 0;
      width: 100%;
      height: 2px;
      pointer-events: none;
      background: #2d6ae3;
      transform: scale3d(0, 1, 1);
      transform-origin: 100% 50%;
      transition: transform 0.5s;
      transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
    }

    &:hover {
      &:before {
        transform: scale3d(1, 1, 1);
        transform-origin: 0% 50%;
      }
    }
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
