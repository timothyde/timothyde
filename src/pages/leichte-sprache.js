import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import LeichteSprache from '../components/leichte-sprache/leichte-sprache'
import Contact from '../components/contact/contact'

const ImprintPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Leichte Sprache" />
    <LeichteSprache />
    <Contact />
  </Layout>
)

export default ImprintPage
