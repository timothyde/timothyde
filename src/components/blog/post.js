import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/de'

moment.locale('de')

const Wrapper = styled.div`
  border-bottom: 2px solid #d0dbe3;
  margin-bottom: 24px;
  color: #092545;

  h2 {
    font-size: 24px;
    margin: 0;
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    letter-spacing: -2px;
  }
`

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.div`
  width: 100%;

  h3 {
    font-style: italic;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`

const Meta = styled.div`
  color: #092545;
  text-align: left;
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
    text-align: right;
  }
`

export default ({ uid, first_publication_date, subtitle, teaser, title }) => (
  <Wrapper>
    <div>
      <Head>
        <Title>
          <h2>{title.text}</h2>
          <h3>{subtitle.text}</h3>
        </Title>
        <Meta>
          Published on{' '}
          {moment(first_publication_date)
            .locale('en')
            .format('DD. MMMM YYYY')}
        </Meta>
      </Head>
      <p>{teaser.text}</p>
      <p>
        <Link to={`/blog/${uid}`}>Zum Post</Link>
      </p>
    </div>
  </Wrapper>
)
