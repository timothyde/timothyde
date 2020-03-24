import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import signature from '../../images/signature.svg'

let Logo = styled.img`
  display: inline-block;
  margin: 0;
  margin-right: 1rem;
  padding: 0;
  width: 60px;
  cursor: pointer;
`

export default () => {
  return (
    <Link to="/">
      <Logo src={signature} />
    </Link>
  )
}
