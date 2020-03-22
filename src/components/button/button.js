import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 60px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: 'Noto Sans';

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
    transition: 0.5s;
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
    transition: 0.5s;
    position: relative;
    background: #2d6ae3;
    content: attr(title);
    transform: translateY(0) rotateX(0);
  }
`

export default ({ title }) => <Button title={title}></Button>
