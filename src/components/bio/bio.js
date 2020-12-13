import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import { Container, Title as T, Text } from '../layout/container'
import Item from './vita/item'

import signature from '../../images/signature.svg'
import tarent from '../../images/tarent.svg'
import kartenhaus from '../../images/kartenhaus.svg'

let Bio = styled.div`
  position: relative;
  margin-bottom: 3rem;
`

const Title = styled(T)`
  text-align: center;
  width: 100%;
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
