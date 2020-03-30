import React from 'react'
import styled from 'styled-components'

import Burger from '../button/burger'
import { Nav, MobileNav } from '../nav/nav'
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

  &.solid {
    background: #fff;
    max-height: 80px;
    padding: 0;
  }
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

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  changeOpen() {
    this.setState({ open: !this.state.open })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getWindowHeight.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getWindowHeight.bind(this))
  }

  //then create the method
  getWindowHeight() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    const shrinkOn = 200

    if (distanceY > shrinkOn) {
      this.setState({
        solid: true,
      })
    }

    if (distanceY < shrinkOn) {
      this.setState({
        solid: false,
      })
    }
  }

  render() {
    const showNav = this.props.pathname === `/`
    return (
      <Head className={this.state.solid ? 'solid' : ''}>
        {showNav && (
          <MobileNav
            open={this.state.open}
            handler={this.changeOpen.bind(this)}
          />
        )}
        <Container>
          <Logo />
          {showNav && <Nav />}
          {showNav && (
            <Burger
              open={this.state.open}
              handler={this.changeOpen.bind(this)}
            />
          )}
        </Container>
      </Head>
    )
  }
}
