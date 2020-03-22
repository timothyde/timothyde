import React from 'react'
import styled from 'styled-components'

import Item from './item/item'

let Showcase = styled.div`
  position: relative;
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

let Title = styled.div`
  h1 {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 0px 10px 0px;
    letter-spacing: -2px;

    line-height: 90px;
    font-size: 120px;

    @media (max-width: 1199px) {
      font-size: 120px;
      line-height: 110px;
    }
  }

  h2 {
    margin: 0px;
    padding: 0px;

    color: #092545;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 5px;
    letter-spacing: -0.3px;
  }

  p > a {
    color: #2d6ae3;
    position: relative;
    display: inline-block;
  }

  p a::after {
    width: 100%;
    height: 2px;
    background: #2d6ae3;
    content: '';
    left: 0;
    position: absolute;
    bottom: -1px;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  width: 100%;

  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`

let ItemContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`

let Text = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  width: 50%;
`

let Button = styled.button`
  background-color: #2d6ae3;
  border: none;
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  padding: 5px 10px 5px 25px;
  text-decoration: none;
  text-align: left;

  height: 64px;
  width: 240px;
`

export default () => (
  <Showcase>
    <Container>
      <Title>
        <h1>
          Show-
          <br />
          case
        </h1>
      </Title>
      <ItemContainer>
        <Item />
        <Item />
        <Item />
        <Text>
          <h2>There's more, but these are the coolest.</h2>
          <p>
            Over the last few years, I've been part of a pretty wide range of
            projects - covering print design, both 2D and 3D animation, web
            development as well as native app development.
          </p>
          <Button>Full list</Button>
        </Text>
      </ItemContainer>
    </Container>
  </Showcase>
)
