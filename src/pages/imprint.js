import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Imprint from '../components/imprint/imprint'
import Contact from '../components/contact/contact'

const IndexPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Home" />
    <Imprint />
    <Contact />
  </Layout>
)

export default IndexPage
