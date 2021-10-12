import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import 'moment/locale/de'
import styled from 'styled-components'

import Layout from '../layout/layout'
import SEO from '../seo'
import Contact from '../contact/contact'
import logo from '../../images/signature.svg'

moment.locale('de')

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-top: 124px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 740px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  flex: wrap;
  text-align: center;

  padding: 0 16px;

  a {
    color: #2d6ae3;
    position: relative;
    display: inline-block;
  }

  a::after {
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
`

const Author = styled.div``

const Post = styled.div`
  width: 100%;

  h1 {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 0px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 20px 10px 20px;
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
    color: #092545;
    display: inline-block;
    margin-bottom: 20px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 20px 10px 20px;
    letter-spacing: -2px;

    line-height: 24px;
    font-size: 24px;

    @media (min-width: 768px) {
      line-height: 40px;
      font-size: 40px;
    }
  }

  p {
    text-align: justify;
    padding: 0px 20px 0px 20px;
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
`

const Subtitle = styled.h3`
  padding: 0px 20px 0px 20px;
  color: #092545;
  display: inline-block;
  margin-bottom: 40px;
  font-style: italic;

  line-height: 24px;
  font-size: 24px;

  @media (min-width: 768px) {
    line-height: 40px;
    font-size: 40px;
  }
`

const Text = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: 400px;
  }

  h3 {
    color: #092545;
    display: inline-block;
    margin-bottom: 20px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 20px 10px 20px;
    letter-spacing: -2px;

    line-height: 16px;
    font-size: 16px;

    @media (min-width: 768px) {
      line-height: 32px;
      font-size: 32px;
    }
  }
`

const PostLayout = ({ location, pageContext }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://timothy.de/blog/${location.pathname}`,
    },
    headline: pageContext.data.title.text,
    description: pageContext.data.teaser.text,
    image: [pageContext.data.image.url],
    author: {
      '@type': 'Person',
      name: 'Timothy Krechel',
    },
    publisher: {
      '@type': 'Organization',
      name: 'timothy.de',
      logo: {
        '@type': 'ImageObject',
        url: logo,
      },
    },
    datePublished: pageContext.first_publication_date,
  }

  return (
    <Layout pathname={location.pathname}>
      <SEO
        title={pageContext.data.title.text}
        description={pageContext.data.teaser.text}
        image={pageContext.data.image.url}
        schemaMarkup={schema}
      />
      <Container>
        <Meta>
          <Link to={'/blog'}>&larr; Zurück</Link>
          <Author>
            Published on{' '}
            {moment(pageContext.first_publication_date)
              .locale('en')
              .format('MMMM Do YYYY')}
          </Author>
        </Meta>
        <Post>
          <h1>{pageContext.data.title.text}</h1>
          <Subtitle>{pageContext.data.subtitle.text}</Subtitle>
          <img
            src={pageContext.data.image.url}
            alt={pageContext.data.image.alt}
          />
          <Text
            dangerouslySetInnerHTML={{
              __html: pageContext.data.text.html,
            }}
          />
        </Post>
        <Meta>
          <Link to="/">&larr; Back</Link>
          <Author>written by Timothy</Author>
        </Meta>
      </Container>
      <Contact />
    </Layout>
  )
}
export default PostLayout
