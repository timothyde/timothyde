import React, { useEffect, useRef } from 'react'
import 'intersection-observer'
import { useIsVisible } from 'react-is-visible'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import { Container, Title, Text as T } from '../layout/container'
import Post from './blog/post'

let Politics = styled.div`
  position: relative;
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding: 0 0.375rem;
    padding-top: 4rem;
  }

  h1 {
    background-image: linear-gradient(to bottom, #21ff85, #21ff85);
  }
`

const Text = styled(T)`
  text-align: left;
  width: 100%;
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
  background: #d9b500;

  padding: 2.5rem;

  height: 100%;
  width: 100%;
`

const CardTitle = styled.div`
  h2 {
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

const Blog = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BlogText = styled(T)`
  padding: 0 1rem;
  text-align: left;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 4rem;
    width: 50%;
  }
`

const BlogItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem 2rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      posts: allPrismicBlogPost(
        sort: { fields: first_publication_date, order: DESC }
        limit: 3
      ) {
        nodes {
          data {
            teaser {
              text
            }
            subtitle {
              text
            }
            title {
              text
            }
          }
          uid
        }
      }
    }
  `)

  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  useEffect(() => {
    const body = document.body
    body.classList.toggle('dark', isVisible)
  }, [isVisible])

  return (
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
        </Title>
        <Text>
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
              gleichzeitig auch allen Leuten eine gesicherte Existenz
              ermöglichen; sei es durch ein faireres Steuersystem, eine
              Abschaffung der Sanktionspolitik im Sozialsystem oder ein
              bedingungsloses Grundeinkommen. Ich möchte einen Beitrag dazu
              leisten und deswegen ist es mein langfristiges Ziel, Bundespolitik
              aktiv mitzugestalten.
            </p>
          </Fade>
        </Text>
        <div ref={nodeRef}>
          <ItemContainer>
            <CardWrapper>
              <Card>
                <CardTitle>
                  <h2>Digitales</h2>
                  <p>
                    Ich setze mich dafür ein, dass die Chancen, die durch
                    Vernetzung, künstliche Intelligenz und breit verfügbarem
                    Wissen allen zu Gute kommen.
                  </p>
                </CardTitle>
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card>
                <CardTitle>
                  <h2>Arbeit</h2>
                  <p>
                    Ich setze mich dafür ein, dass alle der Arbeit&mdash;bezahlt
                    und unbezahlt&mdash;nachgehen können, die ihnen ein Gefühl
                    von Selbstwert, Gemeinschaft und Würde gibt, ihren Talenten
                    entspricht und Freude bereitet. Dafür braucht es mit
                    Autonomie, Selbstwirksamkeit und Sinnhaftigkeit die
                    richtigen Umstände
                  </p>
                </CardTitle>
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card>
                <CardTitle>
                  <h2>Soziales</h2>
                  <p>
                    Ich arbeite für eine sozial gerechte Gesellschaft, in der
                    jeder Mensch teilhaben kann, vor Armut geschützt ist und
                    selber über sein Leben bestimmen kann.
                  </p>
                </CardTitle>
              </Card>
            </CardWrapper>
          </ItemContainer>
        </div>
        <Blog>
          <BlogText>
            <h2>
              <span>Ein paar</span>
              <br />
              Gedanken
            </h2>
            <p>
              Manchmal überkommt es mich und ich schreibe ein paar meiner
              Gedanken, beispielsweise zu einem guten Buch, in meinem Blog
              nieder. Hier finden sich die aktuellsten Einträge, die komplette
              Sammlung gibt es <Link to="blog">hier</Link>.
            </p>
          </BlogText>
          <BlogItems>
            {data.posts.nodes.map(({ uid, data }, i) => (
              <Post key={i} uid={uid} {...data} />
            ))}
          </BlogItems>
        </Blog>
      </Container>
    </Politics>
  )
}
