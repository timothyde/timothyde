import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;

  width: 100%;

  @media (min-width: 992px) {
    width: 50%;

    :nth-child(1) {
      margin-left: 50%;
    }

    :nth-child(2) {
      margin-top: -20%;
    }
  }
`

const Card = styled.div`
  background: #33a3df;

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
    font-size: 32px;
    letter-spacing: -0.5px;
    line-height: 28px;
  }

  p {
    color: rgba(32, 29, 27, 0.4);
  }
`

export default ({ title, subtitle }) => (
  <CardWrapper>
    <Card>
      <Title>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Title>
    </Card>
  </CardWrapper>
)
