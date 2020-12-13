import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Burger from '../button/burger'
import { Nav, MobileNav } from '../nav/nav'
import Logo from '../nav/logo'

const Head = styled.header`
  position: fixed;
  top: 0px;
  max-height: 100px;
  z-index: 999;
  width: 100%;
  background: none;
  padding: 25px 0px 25px;
  transition: all ease 0.5s;

  &.solid {
    background: #fff;
    max-height: 80px;
    padding: 0;
  }
`

const Container = styled.div`
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

export default () => {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSolid(window.pageYOffset > 200)
      )
    }
  }, [])

  return (
    <Head className={solid ? 'solid' : ''}>
      <MobileNav open={open} handler={() => setOpen(!open)} />
      <Container>
        <Logo />
        <Nav />
        <Burger open={open} handler={() => setOpen(!open)} />
      </Container>
    </Head>
  )
}
