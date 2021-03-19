import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Button from '../button/button'
import triangle from '../../images/triangle.svg'

let Hero = styled.div`
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0 0.375rem;
  }

  @media (min-width: 768px) {
    background: url(${triangle});
    background-position: top right -100px;
    background-repeat: no-repeat;
  }

  @media (min-width: 1200px) {
    background-position: top right;
  }
`

let Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 740px;
  }

  @media (min-width: 992px) {
    width: 900px;
    min-height: 100vh;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`

let ImageContainer = styled.div`
  width: 40%;
  flex-grow: 2;
  min-height: 400px;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
`

let Image = styled(Img)`
  height: auto;
  width: 100%;
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

    line-height: 35px;
    font-size: 35px;

    @media (min-width: 768px) {
      line-height: 45px;
      font-size: 50px;
    }

    @media (min-width: 768px) {
      font-size: 60px;
      line-height: 60px;
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

  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0;
  }

  @media (min-width: 1200px) {
    width: 60%;
    height: 100vh;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Hero>
      <Container>
        <Text>
          <Fade bottom distance="100px">
            <h1>
              Tech-Enthusiast,
              <br />
              Musik-Nerd,
              <br />
              Gut im Googlen
            </h1>
          </Fade>
          <Fade bottom delay={100} distance="100px">
            <p>
              Hi! Ich bin Timothy und helfe{' '}
              <a
                href="https://tarent.de"
                rel="noopener noreferrer"
                target="_blank"
              >
                @tarent
              </a>{' '}
              innovativen Köpfen bei der Umsetzung ihrer Ideen. Du hast ein
              spannendes Projekt und suchst Unterstützung? Cool,{' '}
              <a href="mailto:hello@timothy.de">schreib mir</a>
            </p>
          </Fade>
          <Fade bottom delay={200} distance="100px">
            <Button itemName="bio" title="Runterscrollen" />
          </Fade>
        </Text>
        <ImageContainer>
          <Fade delay={100}>
            <Image fluid={data.hero.childImageSharp.fluid} />
          </Fade>
        </ImageContainer>
      </Container>
    </Hero>
  )
}
