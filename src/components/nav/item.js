import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Item = styled(Link)`
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
`

export const NavItem = ({ to, children }) => {
  return (
    <Item to={to} aria-label={`Gehe zu ${to}`}>
      {children}
    </Item>
  )
}

const MobileItem = styled(Link)`
  color: #fff;
  font-size: 42px;
  line-height: 55px;

  transition: transform 0.3s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
  transform: translateY(-90px);

  font-family: 'Montserrat', sans-serif;
`

export const MobileNavItem = ({ to, children, handler }) => {
  return (
    <MobileItem to={to} aria-label={`Gehe zu ${to}`} onClick={handler}>
      {children}
    </MobileItem>
  )
}
