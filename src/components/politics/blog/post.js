import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 24px;
  border-bottom: 2px solid #d0dbe3;

  h2 {
    color: #d9b500;
    font-size: 24px;
    margin: 0;
  }

  h3 {
    font-style: italic;
  }

  p,
  h3,
  a,
  a:after {
    transition: all 0.3s ease;
  }

  body.dark & p {
    color: #f6faf5;
  }

  body.dark & h3 {
    color: #f6faf5;
  }

  body.dark & p > a {
    color: #d9b500;
  }

  body.dark & p a::after {
    background: #d9b500;
  }
`

export default ({ uid, subtitle, teaser, title }) => (
  <Wrapper>
    <div>
      <h2>{title.text}</h2>
      <h3>{subtitle.text}</h3>
      <p>{teaser.text}</p>
      <p>
        <Link to={`/blog/${uid}`}>Go To Post</Link>
      </p>
    </div>
  </Wrapper>
)
