import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #2d6ae3;
  border: none;
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  padding: 5px 10px 5px 25px;
  text-decoration: none;
  text-align: left;

  height: 64px;
  width: 240px;
`

export default ({ children }) => <Button>{children}</Button>
