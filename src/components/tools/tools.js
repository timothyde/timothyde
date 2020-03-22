import React from 'react'
import styled from 'styled-components'

import Category from './skills/category'

let Tools = styled.div`
  position: relative;
  padding-top: 4rem;
  background: #092545;
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
    color: #fff;
  }

  p {
    color: #4973a2;
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
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`

let ItemContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`

export default () => (
  <Tools>
    <Container>
      <Title>
        <h1>
          Tools
          <br />
          &amp; skills
        </h1>
        <h2>
          <span>Standing on the</span>
          <br />
          shoulders of giants
        </h2>
        <p>
          I've found that by leveraging the latest and greatest tooling you can
          achieve a 10x boost of productivity. This applies even to learning new
          stuff like languages. It's especially astonishing how communities like
          open source push the boundaries of what's possible.
        </p>
        <h2>Thank you, folks!</h2>
      </Title>
      <ItemContainer>
        <Category />
        <Category />
        <Category />
      </ItemContainer>
    </Container>
  </Tools>
)
