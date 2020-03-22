import React from 'react'
import styled from 'styled-components'

import Item from './vita/item'

let Bio = styled.div`
  position: relative;
  margin-bottom: 3rem;
`

let Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    width: 740px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
`

let Title = styled.div`
  width: 100%;

  h1 {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 0px 40px 0px;
    letter-spacing: -2px;

    margin: 0 auto;
    width: 100%;

    text-align: center;
    line-height: 90px;
    font-size: 120px;

    @media (max-width: 1199px) {
      font-size: 120px;
      line-height: 110px;
    }
  }
`

let Text = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;

  p > a {
    color: #2d6ae3;
    position: relative;
    display: inline-block;
  }

  p a::after {
    width: 100%;
    height: 2px;
    background: #2d6ae3;
    content: '';
    left: 0;
    position: absolute;
    bottom: -1px;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }
`

const Vita = styled.div`
  display: flex;
`

const VitaText = styled.div`
  margin-top: 4rem;
  padding: 0 1rem;
  width: 50%;
`

const VitaItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem 2rem;
  width: 50%;
`

export default () => (
  <Bio>
    <Container>
      <Title>
        <h1>
          Bio-
          <br />
          graphy
        </h1>
      </Title>
      <Text>
        <h2>
          <span>Est do enim labore occaecat ad</span>
          <br />
          labore eiusmod enim cillum.
        </h2>
        <p>
          Est do enim labore occaecat ad labore eiusmod enim cillum. Cillum
          labore proident officia voluptate ea fugiat aliqua aliquip commodo
          sit. Nostrud voluptate esse eu Lorem ea Lorem reprehenderit laboris
          ut. Do laboris nostrud do cupidatat sunt ut voluptate dolor
          consectetur commodo consequat nostrud deserunt. Dolor est adipisicing
          sit ad pariatur occaecat ullamco commodo laborum ullamco tempor ut
          ullamco. Adipisicing qui ad velit ullamco ipsum. Elit est aliqua ex
          sunt laborum.
        </p>
      </Text>
      <Vita>
        <VitaText>
          <h2>
            <span>Officia ut ad</span>
            <br />
            dolor tempor.
          </h2>
          <p>
            Id consectetur sint pariatur officia minim qui elit aliquip aliquip
            amet cupidatat mollit ex sint. See my{' '}
            <a href="https://linkedin.com">LinkedIn</a> profile for a more
            complete list.
          </p>
        </VitaText>
        <VitaItems>
          <Item />
          <Item />
          <Item />
        </VitaItems>
      </Vita>
    </Container>
  </Bio>
)
