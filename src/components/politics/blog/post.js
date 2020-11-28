import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 2px solid #d0dbe3;
  color: #fff;

  h2 {
    color: #d9b500;
    font-size: 24px;
    margin: 0;
  }

  p {
  }
`

export default ({ uid, subtitle, teaser, title }) => (
  <Wrapper>
    <div>
      <h2>{title.text}</h2>
      <h3>{subtitle.text}</h3>
      <p>{teaser.text}</p>
      <p>
        <Link to={`/blog/${uid}`}>Zum Post</Link>
      </p>
    </div>
  </Wrapper>
)
