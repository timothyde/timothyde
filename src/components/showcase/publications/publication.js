import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import moment from 'moment'

const Wrapper = styled.div`
  margin-bottom: 24px;
  border-bottom: 2px solid #d0dbe3;

  h2 {
    color: #f15b74;
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
    color: #f15b74;
  }

  body.dark & p a::after {
    background: #f15b74;
  }
`

export default ({ title, location, description, url, date }) => {
  const dateString = moment(date).format('MMMM YYYY')

  return (
    <Wrapper>
      <div>
        <h2>{title[0].text}</h2>
        <h3>
          {dateString} | {location[0].text}
        </h3>
        <p>{description[0].text}</p>
        <p>
          <Link to={url.url}>View</Link>
        </p>
      </div>
    </Wrapper>
  )
}
