import React from 'react'
import styled from 'styled-components'

import Skill from './skill'

const Wrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;

  width: 100%;

  @media (min-width: 992px) {
    width: 50%;

    :nth-child(1) {
      margin-left: 50%;
    }

    :nth-child(2) {
      margin-top: -20rem;
    }
  }
`

const Card = styled.div`
  background: #0d2d52;

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

  p {
    color: #4973a2;
  }
`

const Skills = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export default () => (
  <Wrapper>
    <Card>
      <Title>
        <h1>Media Production</h1>
        <p>Creating animations, recording music or designing print media.</p>
      </Title>
      <Skills>
        <Skill name={'Adobe CC'} percent={90} />
        <Skill name={'Logix Pro X'} percent={80} />
        <Skill name={'Logix Pro X'} percent={80} />
        <Skill name={'Logix Pro X'} percent={80} />
        <Skill name={'Logix Pro X'} percent={80} />
        <Skill name={'Logix Pro X'} percent={80} />
        <Skill name={'Logix Pro X'} percent={80} />
      </Skills>
    </Card>
  </Wrapper>
)
