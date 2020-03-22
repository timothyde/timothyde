import React from 'react'
import styled from 'styled-components'

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
    line-height: 90px;
    font-size: 120px;

    @media (max-width: 1199px) {
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
  <Contact>
    <Container>
      <Title>
        <h1>
          Con
          <br />
          -tact
        </h1>
      </Title>
      <Text>
        <h2>
          <span>Wanna connect?</span>
          <br />
          Awesome!{' '}
          <span>
            Just <a href="mailto:hello@timothy.de">send me an email</a>.
          </span>
        </h2>
        <p>
          Or... you can add me on <a href="mailto:hello@timothy.de">LinkedIn</a>{' '}
          or <a href="mailto:hello@timothy.de">Twitter</a>. Cheers!
        </p>
      </Text>
    </Container>
  </Contact>
)
