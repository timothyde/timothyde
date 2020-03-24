import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Button = styled.a`
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 60px;
  position: relative;
  min-width: 200px;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: 'Noto Sans';
  cursor: pointer;

  &:hover {
    &:after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &:before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &:after {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: #fff;
    display: block;
    padding: 0 30px;
    transition: 0.5s;
    text-align: left;
    position: absolute;
    background: #2d6ae3;
    content: attr(title);
    transform: translateY(-50%) rotateX(90deg);
  }

  &:before {
    top: 0;
    left: 0;
    opacity: 1;
    color: #fff;
    display: block;
    padding: 0 30px;
    line-height: 60px;
    text-align: left;
    transition: 0.5s;
    position: relative;
    background: #2d6ae3;
    content: attr(title);
    transform: translateY(0) rotateX(0);
  }
`

const StyledLink = styled(Link)`
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 60px;
  position: relative;
  width: 200px;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: 'Noto Sans';
  cursor: pointer;

  &:hover {
    &:after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &:before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &:after {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: #fff;
    display: block;
    padding: 0 30px;
    transition: 0.5s;
    text-align: left;
    position: absolute;
    background: #2d6ae3;
    content: attr(title);
    transform: translateY(-50%) rotateX(90deg);
  }

  &:before {
    top: 0;
    left: 0;
    opacity: 1;
    color: #fff;
    display: block;
    padding: 0 30px;
    line-height: 60px;
    text-align: left;
    transition: 0.5s;
    position: relative;
    background: #2d6ae3;
    content: attr(title);
    transform: translateY(0) rotateX(0);
  }
`

export default ({ itemName, title }) => {
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
    <Button
      href={`#${itemName}`}
      onClick={handleClick}
      ariaLabel={`Scroll to ${itemName}`}
      title={title}
    ></Button>
  )
}

export const LinkButton = ({ title, to }) => (
  <StyledLink title={title} to={to}></StyledLink>
)
