import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Item = styled.a`
  margin: 0 1rem;
  color: #092545;
  position: relative;
  cursor: pointer;
  letter-spacing: -0.6px;
  font-size: 14px;

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - -9px);
    left: 0;
    width: 100%;
    height: 2px;
    background: #2d6ae3;
    transform: scale3d(0, 1, 1);
    transform-origin: 100% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
  }

  &:hover {
    &:before {
      transform: scale3d(1, 1, 1);
      transform-origin: 0% 50%;
    }
  }
`

export default ({ itemName, children }) => {
  const [anchorTarget, setAnchorTarget] = useState(null)

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName))
  }, [itemName])

  const handleClick = event => {
    event.preventDefault()

    const yOffset = -100
    const y =
      anchorTarget.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <Item
      href={`#${itemName}`}
      onClick={handleClick}
      ariaLabel={`Scroll to ${itemName}`}
    >
      {children}
    </Item>
  )
}
