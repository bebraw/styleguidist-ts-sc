import React from 'react'
import { ThemeProvider } from 'styled-components'

export default class ThemeWrapper extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{}}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}