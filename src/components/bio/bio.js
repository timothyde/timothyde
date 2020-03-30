import React from 'react'
import styled from 'styled-components'

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
        <h1>
          Bio-
          <br />
          graphy
        </h1>
      </Title>
      <Text>
        <h2>
          <span>Actually, I'm</span>
          <br />
          just pretty damn curious.
        </h2>
        <p>
          Exploring things is my major passion. Whether it's a hardly known
          music album by Van Halen, an awesome new JavaScript library or a
          friend's favorite book. I greatly value listening to people who share
          their tales, tastes and experiences as a great way of growing - and in
          the in the end, growth is what makes life meaningful to me. Building a
          skill-set that covers a wide range of fields and metiers has proven
          invaluable in founding a business or two and allows viewing a problem
          from different angles to come up with a suitable solution. <br /> Keep
          on learning!
        </p>
        <h2>Love,</h2>
        <Signature src={signature} />
      </Text>
      <Vita>
        <VitaText>
          <h2>
            <span>One step</span>
            <br />
            at a time.
          </h2>
          <p>
            These are the most recent footprints of my prorfessional life. See
            my <a href="https://linkedin.com">LinkedIn</a> profile for a more
            complete list.
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
