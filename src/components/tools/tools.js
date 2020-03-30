import React from 'react'
import styled from 'styled-components'

import Category from './skills/category'

let Tools = styled.div`
  position: relative;
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding: 0 0.375rem;
    padding-top: 4rem;
  }
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
  h1 {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
    color: transparent;
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
    text-indent: -3px;
    margin-left: -6px;
    padding: 20px 0px 10px 0px;
    letter-spacing: -2px;

    line-height: 45px;
    font-size: 60px;

    @media (min-width: 768px) {
      font-size: 80px;
      line-height: 70px;
    }

    @media (min-width: 960px) {
      font-size: 120px;
      line-height: 110px;
    }
  }

  h2 {
    color: #fff;
  }

  p {
    color: #4973a2;
  }

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

  width: 100%;

  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`

let ItemContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`

export default () => (
  <Tools id="tools">
    <Container>
      <Title>
        <h1>
          Tools
          <br />
          &amp; skills
        </h1>
        <h2>
          <span>Standing on the</span>
          <br />
          shoulders of giants
        </h2>
        <p>
          I've found that by leveraging the latest and greatest tooling you can
          achieve a 10x boost of productivity. It's especially astonishing how
          communities like open source push the boundaries of what's possible.
        </p>
        <h2>Thank you, folks, for such great products!</h2>
      </Title>
      <ItemContainer>
        <Category
          title="Media Production"
          subtitle="Creating animations, recording music or designing print media."
          data={mediaData}
        />
        <Category
          title="Tech"
          subtitle="Developing Apps, Webpages and handling data"
          data={techData}
        />
        <Category
          title="Other"
          subtitle="Office tools and languages"
          data={otherData}
        />
      </ItemContainer>
    </Container>
  </Tools>
)

const mediaData = [
  {
    name: 'Photoshop',
    value: 0.95,
  },
  {
    name: 'After Effects',
    value: 0.9,
  },
  {
    name: 'Illustrator',
    value: 0.85,
  },
  {
    name: 'InDesign',
    value: 0.8,
  },
  {
    name: 'Cinema 4D',
    value: 0.95,
  },
  {
    name: 'Logic Pro X',
    value: 0.95,
  },
]

const techData = [
  {
    name: 'HTML',
    value: 0.95,
  },
  {
    name: 'CSS, SCSS etc.',
    value: 0.95,
  },
  {
    name: 'JavaScript',
    value: 0.95,
  },
  {
    name: 'React',
    value: 0.95,
  },
  {
    name: 'Gatsby.js',
    value: 0.8,
  },
  {
    name: 'Next.js',
    value: 0.85,
  },
  {
    name: 'Node.js',
    value: 0.9,
  },
  {
    name: 'GraphQL',
    value: 0.9,
  },
  {
    name: 'REST',
    value: 0.8,
  },
  {
    name: 'SQL',
    value: 0.75,
  },
  {
    name: 'Postgis',
    value: 0.75,
  },
  {
    name: 'Docker',
    value: 0.7,
  },
  {
    name: 'Swift',
    value: 0.8,
  },
  {
    name: 'Python',
    value: 0.7,
  },
  {
    name: 'Jupyter',
    value: 0.7,
  },
]

const otherData = [
  {
    name: 'Office',
    value: 0.9,
  },
  {
    name: 'German',
    value: 0.95,
  },
  {
    name: 'English',
    value: 0.9,
  },
  {
    name: 'French',
    value: 0.4,
  },
  {
    name: 'Japanese',
    value: 0.4,
  },
  {
    name: 'Mandarin Chinese',
    value: 0.3,
  },
]
