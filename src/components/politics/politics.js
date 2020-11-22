import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Category from './topics/category'

let Politics = styled.div`
  position: relative;
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding: 0 0.375rem;
    padding-top: 4rem;
  }
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
    background-image: linear-gradient(to bottom, #21ff85, #21ff85);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 0px 10px 0px;
    letter-spacing: -2px;

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

  h2 {
    color: #f6faf5;
  }

  p {
    color: #f6faf5;
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

const CardWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;

  width: 100%;

  @media (min-width: 992px) {
    width: 50%;

    :nth-child(1) {
      margin-left: 50%;
    }

    :nth-child(2) {
      margin-top: -20%;
    }
  }
`

const Card = styled.div`
  background: #33a3df;

  padding: 2.5rem;

  height: 100%;
  width: 100%;
`

const CardTitle = styled.div`
  h1 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin-bottom: 32px;
    font-size: 32px;
    letter-spacing: -0.5px;
    line-height: 28px;
  }

  p {
    color: rgba(32, 29, 27, 0.4);
  }
`

export default () => (
  <Politics id="politics">
    <Container>
      <Title>
        <Fade bottom distance="50px">
          <h1>
            Pol-
            <br />
            itik
          </h1>
        </Fade>
        <Fade bottom distance="50px">
          <h2>
            "Und welcher der beiden Wölfe gewinnt?"
            <br />
            <span>"Der, den du fütterst."</span>
          </h2>
        </Fade>
        <Fade bottom distance="50px">
          <p>
            Ich glaube, wir müssen neben ökologisch sinnvollen Maßnahmen
            gleichzeitig auch allen Leuten eine gesicherte Existenz ermöglichen;
            sei es durch ein faireres Steuersystem, eine Abschaffung der
            Sanktionspolitik im Sozialsystem oder ein bedingungsloses
            Grundeinkommen. Ich möchte einen Beitrag dazu leisten und deswegen
            ist es mein langfristiges Ziel, Bundespolitik aktiv mitzugestalten.
          </p>
        </Fade>
      </Title>
      <ItemContainer>
        <CardWrapper>
          <Card>
            <CardTitle>
              <h1>Digitales</h1>
              <p>
                Ich setze mich dafür ein, dass die Chancen, die durch
                Vernetzung, künstliche Intelligenz und breit verfügbarem Wissen
                allen zu Gute kommen.
              </p>
            </CardTitle>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <CardTitle>
              <h1>Arbeit</h1>
              <p>
                Ich setze mich dafür ein, dass alle der Arbeit&mdash;bezahlt und
                unbezahlt&mdash;nachgehen können, die ihnen ein Gefühl von
                Selbstwert, Gemeinschaft und Würde gibt, ihren Talenten
                entspricht und Freude bereitet. Dafür braucht es mit Autonomie,
                Selbstwirksamkeit und Sinnhaftigkeit die richtigen Umstände
              </p>
            </CardTitle>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <CardTitle>
              <h1>Soziales</h1>
              <p>
                Ich arbeite für eine sozial gerechte Gesellschaft, in der jeder
                Mensch teilhaben kann, vor Armut geschützt ist und selber über
                sein Leben bestimmen kann.
              </p>
            </CardTitle>
          </Card>
        </CardWrapper>
      </ItemContainer>
    </Container>
  </Politics>
)
