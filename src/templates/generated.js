import React from 'react'
import { useRouteData } from 'react-static'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Generated Route: {useRouteData().title}</h1>
  </div>
)
