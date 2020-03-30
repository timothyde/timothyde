import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Item from './item/item'

import captainimmo from '../../images/captainimmo.png'
import aboadieu from '../../images/aboadieu.png'
import lf4d from '../../images/lf4d.png'

let Showcase = styled.div`
  position: relative;

  @media (max-width: 768px) {
    padding: 0 0.375rem;
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
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
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
    margin: 0px;
    padding: 0px;

    color: #092545;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 5px;
    letter-spacing: -0.3px;
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

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`

let ItemContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`

let Text = styled.div`
  padding: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    margin-top: 4rem;
    width: 50%;
  }
`

export default () => (
  <Showcase id="showcase">
    <Container>
      <Fade bottom distance="50px">
        <Title>
          <h1>
            Show-
            <br />
            case
          </h1>
        </Title>
      </Fade>
      <ItemContainer>
        {showcaseData.map((data, i) => (
          <Item key={i} {...data} />
        ))}
        <Text>
          <h2>There's more, but these are the coolest.</h2>
          <p>
            Over the last few years, I've been part of a pretty wide range of
            projects - covering print design, both 2D and 3D animation, web
            development as well as native app development.
          </p>
        </Text>
      </ItemContainer>
    </Container>
  </Showcase>
)

const showcaseData = [
  {
    customer: 'eindruckhochzwei',
    title: 'Abo Adieu',
    description: 'iOS Development',
    url: 'https://apps.apple.com/de/app/abo-adieu/id1079361985',
    color: '#ff6021',
    image: aboadieu,
  },
  {
    customer: 'Liquid Force',
    title: '4D Form ',
    description: '3D Animation',
    url: 'https://vimeo.com/193990616',
    color: '#7e42e1',
    image: lf4d,
    full: true,
  },
  {
    customer: 'Kartenhaus Software',
    title: 'Captain Immo',
    description: 'Web Development',
    url:
      'https://www.general-anzeiger-bonn.de/news/wirtschaft/regional/bonner-start-up-captain-immo-geht-online_aid-43676339',
    color: '#7e42e1',
    image: captainimmo,
  },
]
