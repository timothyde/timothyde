import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Item from './vita/item'

import signature from '../../images/signature.svg'
import tarent from '../../images/tarent.svg'
import kartenhaus from '../../images/kartenhaus.svg'

let Bio = styled.div`
  position: relative;
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

const Signature = styled.img`
  margin-top: -30px;

  text-align: right;
  width: 100px;
`

const Vita = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const VitaText = styled.div`
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 4rem;
    width: 50%;
  }
`

const VitaItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem 2rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export default () => (
  <Bio id="bio">
    <Container>
      <Title>
        <Fade bottom distance="50px">
          <h1>
            Über
            <br />
            mich
          </h1>
        </Fade>
      </Title>
      <Text>
        <Fade bottom distance="50px">
          <h2>
            <span>Eigentlich bin ich</span>
            <br />
            nur ziemlich neugierig.
          </h2>
          <p>
            Etwas Neues zu entdecken ist meine große Leidenschaft - egal, ob es
            ein ganz unbekanntes Album von Van Halen, eine geniale
            JavaScript-Library oder das Lieblingsbuch eines Freundes ist. Ich
            schätze es sehr, wenn Leute ihre Geschichten, Geschmäcker und
            Erfahrungen mit mir teilen und mir die Gelegenheit geben, daran zu
            wachsen. Denn am Ende ist persönliches Wachstum für mich eine große
            sinngebende Komponente. Ein breites Skillset zu entwickeln hat sich
            als sehr wertvoll für meine berufliche Laufbahn erwiesen und erlaubt
            es, ein Problem aus verschiedenen Blickwinkeln zu betrachten und
            ganzheitlichere Lösungen zu finden. In diesem Sinne:
            <br /> Happy Learning!
          </p>
          <h2>Bis dann,</h2>
          <Signature src={signature} />
        </Fade>
      </Text>
      <Vita>
        <VitaText>
          <h2>
            <span>Ein Schritt</span>
            <br />
            nach dem Anderen.
          </h2>
          <p>
            Das hier sind die aktuellsten Schritte meines Berufslebens. Eine
            vollständige Übersicht gibt's auf meinem{' '}
            <a
              href="https://www.linkedin.com/in/timothyde/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            -Profil.
          </p>
        </VitaText>
        <VitaItems>
          {vitaData.map((data, i) => (
            <Item key={i} {...data} />
          ))}
        </VitaItems>
      </Vita>
    </Container>
  </Bio>
)

const vitaData = [
  {
    company: 'tarent solutions GmbH',
    position: 'Senior Technology Consultant',
    logo: tarent,
  },
  {
    company: 'Kartenhaus Software GmbH',
    position: 'Fullstack Developer & Product Manager',
    logo: kartenhaus,
  },
  {
    company: 'Kartenhaus Software GmbH',
    position: 'Co-Founder',
    logo: kartenhaus,
  },
]
