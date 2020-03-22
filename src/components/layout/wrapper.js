import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.0875rem 1.45rem;
`

export default ({ children }) => <Wrapper>{children}</Wrapper>
