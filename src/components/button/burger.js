import React from 'react'
import styled from 'styled-components'

const Burger = styled.div`
  width: 30px;
  height: 22px;
  position: absolute;
  right: 2rem;
  z-index: 999;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #2d6ae3;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2) {
    top: 9px;
  }

  span:nth-child(3) {
    top: 18px;
  }

  &.open span:nth-child(1) {
    top: 9px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  &.open span:nth-child(3) {
    top: 9px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  &.open span {
    background: #fff;
  }

  @media (min-width: 576px) {
    display: none;
  }
`

export default ({ open, handler }) => {
  console.log(open)
  return (
    <Burger className={open ? 'open' : ''} onClick={handler}>
      <span></span>
      <span></span>
      <span></span>
    </Burger>
  )
}
