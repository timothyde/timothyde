import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/hero'
import Bio from '../components/bio/bio'
import Showcase from '../components/showcase/showcase'
import Tools from '../components/tools/tools'
import Contact from '../components/contact/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Bio />
    <Showcase />
    <Tools />
    <Contact />
  </Layout>
)

export default IndexPage
