import React from 'react'
import styled from 'styled-components'

const Skill = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`

const Name = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: 600;

  margin: 0;
  padding: 0;

  width: 70%;
`

const Bar = styled.div`
  overflow: hidden;
  height: 4px;
  background-color: #092545;
  width: 30%;
`

const Progress = styled.div`
  float: left;
  height: 100%;
  width: ${props => props.percent}%;

  color: #fff;
  text-align: center;
  background-color: #f55c59;
`

export default ({ name, percent }) => (
  <Skill>
    <Name>{name}</Name>
    <Bar>
      <Progress percent={percent} />
    </Bar>
  </Skill>
)
