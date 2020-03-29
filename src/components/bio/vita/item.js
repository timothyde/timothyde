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
    padding-left: 10%;

    @media (min-width: 768px) {
      padding-left: 30%;
    }

    width: 100%;
  }

  :nth-child(3) {
    margin-left: 0%;
    border: none;

    @media (min-width: 768px) {
      margin-left: 15%;
    }
  }

  h2 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 0.75rem;
  }

  h4 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 12px;
  }
`

const Logo = styled.div`
  background: url(${props => props.logo});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 50%;

  flex-shrink: 0;
  margin-right: 1rem;

  height: 65px;
  width: 65px;
`

export default ({ company, position, logo }) => (
  <Wrapper>
    <Logo logo={logo} />
    <div>
      <h4>{company}</h4>
      <h2>{position}</h2>
    </div>
  </Wrapper>
)
