import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  border: 1px solid black;
`

class Footer extends Component {
  render() {
    return (
      <Container>
        Footer
      </Container>
    )
  }
}

export default Footer