import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Error from '../components/404/404'
import Contact from '../components/contact/contact'

const IndexPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Home" />
    <Error />
    <Contact />
  </Layout>
)

export default IndexPage
