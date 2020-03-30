import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Tada from 'react-reveal/Tada'

import Button from '../button/button'

let Contact = styled.div`
  position: relative;
  margin: 4rem 0;
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
  width: 100%;

  h1 {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 0px 40px 0px;
    letter-spacing: -2px;

    margin: 0 auto;
    width: 100%;

    text-align: center;

    line-height: 45px;
    font-size: 60px;

    @media (min-width: 768px) {
      font-size: 80px;
      line-height: 70px;
    }

    @media (min-width: 960px) {
      font-size: 120px;
      line-height: 110px;
    }
  }
`

let Text = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;

  p {
    margin-top: 2rem;
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
`

export default () => (
  <Contact id="contact">
    <Container>
      <Title>
        <Fade bottom distance="50px">
          <h1>
            Con-
            <br />
            tact
          </h1>
        </Fade>
      </Title>
      <Text>
        <h2>
          <span>Want to connect?</span>{' '}
          <Tada forever={true} timeout={3000}>
            Awesome!
          </Tada>
        </h2>
        <Button href="mailto:hello@timothy.de" title="Email me!" />
        <p>
          Or... you can add me on <a href="mailto:hello@timothy.de">LinkedIn</a>{' '}
          or <a href="mailto:hello@timothy.de">Twitter</a>. Cheers!
        </p>
      </Text>
    </Container>
  </Contact>
)
