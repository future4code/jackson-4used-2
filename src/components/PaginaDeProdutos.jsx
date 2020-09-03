import React, { Component } from 'react'
import styled from 'styled-components'

import GridDeProdutos from './GridDeProdutos'
import Filtros from './Filtros'

const Container = styled.div`
 display:flex;
 flex-direction:column;
`

class PaginaDeProdutos extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.categoriaAtual}</h2>
        <Filtros />
        <GridDeProdutos />
      </Container>
    )
  }
}

export default PaginaDeProdutos