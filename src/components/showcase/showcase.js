import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import { Container, Title, Text as T } from '../layout/container'
import Item from './item/item'

let Showcase = styled.div`
  position: relative;

  @media (max-width: 768px) {
    padding: 0 0.375rem;
  }
`

let ItemContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`

let Text = styled(T)`
  padding: 1rem;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    margin-top: 4rem;
    width: 50%;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query ShowcaseQuery {
      aboadieu: file(relativePath: { eq: "aboadieu.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      captainimmo: file(relativePath: { eq: "captainimmo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lf4d: file(relativePath: { eq: "lf4d.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const showcaseData = [
    {
      customer: 'eindruckhochzwei',
      title: 'Abo Adieu',
      description: 'iOS-Entwicklung',
      url: 'https://apps.apple.com/de/app/abo-adieu/id1079361985',
      color: '#ff6021',
      fluid: data.aboadieu.childImageSharp.fluid,
    },
    {
      customer: 'Liquid Force',
      title: '4D Form ',
      description: '3D-Animation',
      url: 'https://vimeo.com/193990616',
      color: '#7e42e1',
      fluid: data.lf4d.childImageSharp.fluid,
      full: true,
    },
    {
      customer: 'Kartenhaus Software',
      title: 'Captain Immo',
      description: 'Webentwicklung',
      url:
        'https://www.general-anzeiger-bonn.de/news/wirtschaft/regional/bonner-start-up-captain-immo-geht-online_aid-43676339',
      color: '#7e42e1',
      fluid: data.captainimmo.childImageSharp.fluid,
    },
  ]

  return (
    <Showcase id="showcase">
      <Container>
        <Fade bottom distance="50px">
          <Title>
            <h1>
              Proj-
              <br />
              ekte
            </h1>
          </Title>
        </Fade>
        <ItemContainer>
          {showcaseData.map((data, i) => (
            <Item key={i} {...data} />
          ))}
          <Text>
            <h2>
              Es gibt noch mehr, aber
              <br /> das sind meine Lieblinge
            </h2>
            <p>
              Über die Jahre war ich Teil von einer ganzen Reihe
              unterschiedlicher Projekte: Printdesign, 2D- und 3D-Animation,
              Webentwicklung und die Entwicklung mobiler Apps.
            </p>
          </Text>
        </ItemContainer>
      </Container>
    </Showcase>
  )
}
