import React from 'react'
import styled from 'styled-components'

import signature from '../../images/signature.svg'

let Logo = styled.img`
  display: inline-block;
  margin: 0;
  margin-right: 1rem;
  padding: 0;
  width: 60px;
  cursor: pointer;
`

export default ({ itemName }) => {
  const handleClick = event => {
    event.preventDefault()

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a href="#" onClick={handleClick} ariaLabel={`Scroll to ${itemName}`}>
      <Logo src={signature} />
    </a>
  )
}
