import React from 'react'
import styled from 'styled-components'

import Burger from '../button/burger'

import signature from '../../images/signature.svg'

let Head = styled.header`
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
  display: none;

  @media (min-width: 576px) {
    display: inline-block;
  }

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
        <Overlay className={this.state.open ? `open` : ``} />
        <MobileNav className={this.state.open ? `open` : ``}>
          <a href="/">Me</a>
          <a href="/">Bio</a>
          <a href="/">Showcase</a>
          <a href="/">Tools</a>
          <a href="/">Contact</a>
        </MobileNav>
        <Container>
          <Logo src={signature} />
          <Nav>
            <a href="/">Me</a>
            <a href="/">Bio</a>
            <a href="/">Showcase</a>
            <a href="/">Tools</a>
            <a href="/">Contact</a>
          </Nav>
          <Burger open={this.state.open} handler={this.changeOpen.bind(this)} />
        </Container>
      </Head>
    )
  }
}
