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
            Bio-
            <br />
            Graphy
          </h1>
        </Fade>
      </Title>
      <Text>
        <Fade bottom distance="50px">
          <h2>
            <span>Actually, I'm just</span>
            <br />
            pretty damn curious.
          </h2>
          <p>
            Exploring things is my major passion. Whether it's a hardly known
            music album by Van Halen, an awesome new JavaScript library or a
            friend's favorite book. I greatly value listening to people who
            share their tales, tastes and experiences as a great way of growing
            - and in the in the end, growth is what makes life meaningful to me.
            Building a skill-set that covers a wide range of fields and metiers
            has proven invaluable in founding a business or two and allows
            viewing a problem from different angles to come up with a suitable
            solution.
            <br /> Keep on learning!
          </p>
          <h2>Love,</h2>
          <Signature src={signature} />
        </Fade>
      </Text>
      <Vita>
        <VitaText>
          <h2>
            <span>One step</span>
            <br />
            at a time.
          </h2>
          <p>
            These are the most recent footprints of my professional life. See my
            <a
              href="https://www.linkedin.com/in/timothyde/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            profile for a more complete list.
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
