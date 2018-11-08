import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi everyone!</h1>
    <p>My name is Andrew Ngo!</p>
    <p>I am a recent graduate from Hack Reactor and experienced in full stack with React and MySQL</p>
    <p>test</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
