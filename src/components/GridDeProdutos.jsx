import React, { Component } from 'react'
import styled from 'styled-components'

import Produto from './Produto'

const Container = styled.div`
  border: 1px solid black;
`

class GridDeProdutos extends Component {
  render() {
    return (
      <Container>
        <h2>Grid de Produtos</h2>
        <Produto />
      </Container>
    )
  }
}

export default GridDeProdutos