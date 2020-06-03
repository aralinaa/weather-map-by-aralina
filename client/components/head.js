import React from 'react'
import { Helmet } from 'react-helmet'

const Head = (props) => (
  <Helmet>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FF0000" />
  </Helmet>
)

Head.propTypes = {}

export default Head
