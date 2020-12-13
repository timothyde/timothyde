import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/hero'
import Bio from '../components/bio/bio'
import Showcase from '../components/showcase/showcase'
import Politics from '../components/politics/politics'
import Contact from '../components/contact/contact'

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Bio />
      <Showcase />
      <Politics />
      <Contact />
    </Layout>
  )
}
