import React from 'react'
import styled from 'styled-components'

let Hero = styled.div`
  height: 100vh;
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

    line-height: 60px;
    font-size: 60px;

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

  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
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
  <Hero>
    <Container>
      <Text>
        <h1>
          Tech Enthusiast,
          <br />
          Music Affine,
          <br />
          Great At Googling
        </h1>
        <p>
          Hi there! I am Timothy, currently working as a technology consultant{' '}
          <a href="https://tarent.de">@tarent</a>. Have a fun project to collab
          on? Awesome, <a href="mailto:hello@timothy.de">hit me up</a>!
        </p>
        <Button>Scroll down</Button>
      </Text>
    </Container>
  </Hero>
)
