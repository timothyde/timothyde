import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.a`
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

    .showcase-image {
      width: 110%;
    }

    .showcase-image-full {
      height: 110%;
    }
  }

  & > div {
    height: 100%;
  }
`

const Card = styled.div`
  background: ${props => (props.color ? props.color : '#7e42e1')};
  color: #fff;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  width: 100%;

  overflow: hidden;

  z-index: -2;
`

const Image = styled(Img)`
  &.showcase-image-full {
    height: 100%;
    width: 100%;
  }

  &&.showcase-image {
    width: 100%;
  }

  position: absolute !important;
  z-index: -1;

  transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
`

const Title = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 2.5rem;
  max-width: calc(100% - 2.5rem);

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
    word-wrap: break-all;
  }
`

export default ({ customer, title, description, url, color, full, fluid }) => (
  <Wrapper href={url} rel="noopener noreferrer" target="_blank">
    <Fade bottom distance="50px">
      <Card color={color}>
        <Title>
          <h1>{customer}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </Title>
        <Image
          fluid={fluid}
          className={full ? `showcase-image-full` : `showcase-image`}
        />
      </Card>
    </Fade>
  </Wrapper>
)
