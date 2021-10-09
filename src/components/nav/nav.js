import React from 'react'
import styled from 'styled-components'

import { NavItem, MobileNavItem } from './item'

let Navigation = styled.nav`
  display: none;

  width: 100%;

  @media (min-width: 576px) {
    display: inline-block;
  }
`

export const Nav = () => {
  return (
    <Navigation>
      <NavItem to={`/#bio`}>Biography</NavItem>
      <NavItem to={`/#showcase`}>Code &amp; Co.</NavItem>
      <NavItem to={`/blog`}>Blog</NavItem>
      <NavItem to={`#contact`}>Contact</NavItem>
    </Navigation>
  )
}

const Overlay = styled.div`
  position: fixed;

  top: 0;
  right: 0;
  height: 0vh;
  width: 100vw;

  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);

  opacity: 0;
  background: #f15b74;
  background-image: linear-gradient(to bottom, #f15b74, #ff6021);
  z-index: 500;

  &.open {
    opacity: 0.95;
    height: 100vh;
  }
`

const Mobile = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  pointer-events: none;

  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;

  transition: all 0.3s ease-in-out;

  opacity: 0;
  z-index: 599;

  &.open {
    opacity: 0.95;
    pointer-events: all;
  }

  &.open a {
    transform: translateY(0px);
  }
`

export const MobileNav = ({ open, handler }) => (
  <>
    <Overlay className={open ? `open` : ``} />
    <Mobile className={open ? `open` : ``}>
      <MobileNavItem to={`/#bio`} handler={handler}>
        Biography
      </MobileNavItem>
      <MobileNavItem to={`/#showcase`} handler={handler}>
        Code &amp; Co.
      </MobileNavItem>
      <MobileNavItem to={`/blog`} handler={handler}>
        Blog
      </MobileNavItem>
      <MobileNavItem to={`#contact`} handler={handler}>
        Contact
      </MobileNavItem>
    </Mobile>
  </>
)
