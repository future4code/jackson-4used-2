import React, { Component } from 'react'
import styled from 'styled-components'

import GridDeProdutos from './GridDeProdutos'
import Filtros from './Filtros'

const Container = styled.div`
  border: 1px solid black;
`

class PaginaDeProdutos extends Component {
  render() {
    return (
      <Container>
        <h2>Título da Categoria</h2>
        <Filtros />
        <GridDeProdutos />
      </Container>
    )
  }
}

export default PaginaDeProdutos