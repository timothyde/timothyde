import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Showcase from '../components/showcase/showcase'
import Contact from '../components/contact/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Showcase />
    <Contact />
  </Layout>
)

export default IndexPage
