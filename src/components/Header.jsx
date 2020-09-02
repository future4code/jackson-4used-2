import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.header`
  border: 1px solid black;
`

class Header extends Component {
  render() {
    return (
      <Container>
        Header
      </Container>
    )
  }
}

export default Header