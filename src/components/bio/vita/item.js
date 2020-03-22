import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 2px solid #d0dbe3;

  display: flex;
  align-items: flex-end;
  padding: 1.5rem 1rem;

  :nth-child(1) {
    width: 75%;
  }

  :nth-child(2) {
    padding-left: 30%;

    width: 100%;
  }

  :nth-child(3) {
    margin-left: 15%;
    border: none;
  }

  h2 {
    font-size: 18px;
    margin: 0;
  }

  h4 {
    margin: 0;
    margin-bottom: 0.7rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 12px;
  }
`

const Logo = styled.div`
  background: #d0dbe3;
  border-radius: 8px;
  flex-shrink: 0;
  margin-right: 1rem;

  height: 65px;
  width: 65px;
`

export default () => (
  <Wrapper>
    <Logo />
    <div>
      <h4>tarent solutions GmbH</h4>
      <h2>Senior Technology Consultant</h2>
    </div>
  </Wrapper>
)
