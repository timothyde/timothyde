import React from 'react'
import styled from 'styled-components'

import Burger from '../button/burger'
import NavItem from '../nav/item'
import Logo from '../nav/logo'

let Head = styled.header`
  position: fixed;
  top: 0px;
  max-height: 100px;
  z-index: 999;
  width: 100%;
  background: none;
  overflow: hidden;
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

  @media (min-width: 1200px) {
    width: 1200px;
  }
`

let Nav = styled.nav`
  display: none;

  @media (min-width: 576px) {
    display: inline-block;
  }
`

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

const MobileNav = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;

  transition: all 0.3s ease-in-out;

  opacity: 0;
  z-index: 599;

  &.open {
    opacity: 0.95;
  }

  a {
    color: #fff;
    font-size: 55px;
    line-height: 65px;

    transition: transform 0.3s;
    transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
    transform: translateY(-90px);

    font-family: 'Montserrat', sans-serif;
  }

  &.open a {
    transform: translateY(0px);
  }
`

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  changeOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <Head>
        {/* <Overlay className={this.state.open ? `open` : ``} />
        <MobileNav className={this.state.open ? `open` : ``}>
          <a href="/">Me</a>
          <a href="/">Bio</a>
          <a href="/">Showcase</a>
          <a href="/">Tools</a>
          <a href="/">Contact</a>
        </MobileNav> */}
        <Container>
          <Logo />
          <Nav>
            <NavItem itemName={`bio`}>Bio</NavItem>
            <NavItem itemName={`showcase`}>Showcase</NavItem>
            <NavItem itemName={`tools`}>Tools</NavItem>
            <NavItem itemName={`contact`}>Contact</NavItem>
          </Nav>
          <Burger open={this.state.open} handler={this.changeOpen.bind(this)} />
        </Container>
      </Head>
    )
  }
}
