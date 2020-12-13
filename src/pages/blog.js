import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Blog from '../components/blog/blog'
import Contact from '../components/contact/contact'

const BlogPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Blog" />
    <Blog />
    <Contact />
  </Layout>
)

export default BlogPage
