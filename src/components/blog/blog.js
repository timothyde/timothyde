import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Post from './post'

let Blog = styled.div`
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

  margin-bottom: 40px;
`

export default () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      posts: allPrismicBlogPost(
        sort: { fields: first_publication_date, order: DESC }
        filter: { tags: { eq: "innovation" } }
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
          first_publication_date
          uid
          tags
        }
      }
    }
  `)

  return (
    <Blog>
      <Container>
        <Title>
          <h1>Blog</h1>
          <p>
            With this blog, I am trying to periodically share my insights
            regarding tech and products.
          </p>
        </Title>
        <h2>Latest Posts</h2>
        {data.posts.nodes.map(({ uid, first_publication_date, data }, i) => (
          <Post
            key={i}
            uid={uid}
            first_publication_date={first_publication_date}
            {...data}
          />
        ))}
      </Container>
    </Blog>
  )
}
