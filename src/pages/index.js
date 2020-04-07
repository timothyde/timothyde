import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/hero'
import Bio from '../components/bio/bio'
import Showcase from '../components/showcase/showcase'
import Tools from '../components/tools/tools'
import Contact from '../components/contact/contact'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { highlighted: false }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getWindowHeight.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getWindowHeight.bind(this))
  }

  //then create the method
  getWindowHeight() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    const toolsTop = document.getElementById('tools').offsetTop - 400
    const toolsBottom = document.getElementById('contact').offsetTop - 600

    this.setState({
      highlighted: distanceY > toolsTop && distanceY < toolsBottom,
    })
  }

  render() {
    const location = this.props.location
    const highlighted = this.state.highlighted
    const hero = this.props.data.hero.childImageSharp.fluid

    return (
      <Layout pathname={location.pathname} highlighted={highlighted}>
        <SEO title="Home" />
        <Hero image={hero} />
        <Bio />
        <Showcase />
        <Tools />
        <Contact />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
