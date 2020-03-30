import React from 'react'
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
      background-size: 110%;
    }

    .showcase-image-full {
      background-size: auto 110%;
    }
  }

  & > div {
    height: 100%;
  }
`

const Card = styled.div`
  background: ${props => (props.color ? props.color : '#7e42e1')};
  color: #fff;

  padding: 2.5rem;
  position: relative;

  height: 100%;
  width: 100%;

  z-index: -2;
`

const Image = styled.div`
  background: url(${props => props.image});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  &.showcase-image-full {
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: -1;

  transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
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

export default ({ customer, title, description, url, color, image, full }) => (
  <Wrapper href={url}>
    <Fade bottom distance="50px">
      <Card color={color}>
        <Title>
          <h1>{customer}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </Title>
        <Image
          image={image}
          className={`showcase-image ${full ? `showcase-image-full` : ``}`}
        />
      </Card>
    </Fade>
  </Wrapper>
)
