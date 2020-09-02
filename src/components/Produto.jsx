import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
`

class Produto extends Component {
  render() {
    return (
      <Container>
        Produto
      </Container>
    )
  }
}

export default Produto