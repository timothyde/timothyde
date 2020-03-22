import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;

  height: 632px;
  width: 100%;

  transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;

  @media (min-width: 768px) {
    width: 50%;
  }

  :nth-child(even) {
    @media (min-width: 768px) {
      margin-top: -80px;
    }
  }

  :nth-child(3) {
    @media (min-width: 768px) {
      order: 4;
      margin-top: -80px;
    }
  }

  &&:hover {
    padding: 10px 30px;
  }
`

const Card = styled.div`
  background: #7e42e1;
  color: #fff;

  padding: 2.5rem;

  height: 100%;
  width: 100%;
`

const Title = styled.div`
  h1 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin-bottom: 10px;
    font-size: 19px;
    letter-spacing: -0.5px;
    line-height: 28px;
  }

  h2 {
    margin: 0px;
    padding: 0px;
    font-weight: normal;
    letter-spacing: -0.3px;
    font-size: 32px;
    line-height: 28px;
    color: #fff;
    padding-right: 50px;
    margin-bottom: 10px;
  }
`

export default () => (
  <Wrapper>
    <Card>
      <Title>
        <h1>MeyerSound</h1>
        <h2>Spacemap Go</h2>
        <p>iOS Development</p>
      </Title>
    </Card>
  </Wrapper>
)
