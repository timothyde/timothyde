import React from 'react'
import styled from 'styled-components'

let Imprint = styled.div`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 3rem;
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
  width: 100%;
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

  @media (min-width: 768px) {
    width: 60%;
  }
`

export default () => (
  <Imprint>
    <Container>
      <Title>
        <h1>
          Imp-
          <br />
          ressum
        </h1>
      </Title>
      <Text>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Timothy Krechel
          <br />
          Oberlarer Platz 1 <br />
          53842 Troisdorf
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+49 177 858 32 44">+49 177 858 32 44</a> <br />
          E-Mail: <a href="mailto:hello@timothy.de">hello@timothy.de</a>
        </p>
        <h2>
          Verantwortlich für den Inhalt <br />
          <span>gemäß § 55 Abs. 2 RSTV</span>
        </h2>
        <p>
          Timothy Krechel
          <br />
          Oberlarer Platz 1 <br />
          53842 Troisdorf
        </p>
      </Text>
    </Container>
  </Imprint>
)
