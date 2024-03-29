import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Imprint from '../components/imprint/imprint'
import Contact from '../components/contact/contact'

const ImprintPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Impressum" />
    <Imprint />
    <Contact />
  </Layout>
)

export default ImprintPage
