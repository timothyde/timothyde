import React from 'react'
import styled from 'styled-components'

import { LinkButton } from '../button/button'

let Error = styled.div`
  height: 100vh;

  @media (max-width: 768px) {
    padding: 0 0.375rem;
  }
`

let Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 740px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
`

let Text = styled.div`
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

    line-height: 35px;
    font-size: 35px;

    @media (min-width: 768px) {
      line-height: 45px;
      font-size: 50px;
    }

    @media (min-width: 768px) {
      font-size: 60px;
      line-height: 60px;
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

  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`

export default () => (
  <Error>
    <Container>
      <Text>
        <h1>
          Error
          <br />
          404
        </h1>
        <p>Yeah, well... this happens.</p>
        <LinkButton to="/" title="Go back" />
      </Text>
    </Container>
  </Error>
)
