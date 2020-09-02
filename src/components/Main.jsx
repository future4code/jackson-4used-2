import React, { Component } from 'react'
import styled from 'styled-components'

import GridDeCategorias from './GridDeCategorias'
import PaginaDeProdutos from './PaginaDeProdutos'
import FormularioDeCriacao from './FormularioDeCriacao'
import Carrinho from './Carrinho'

const Container = styled.main`
  border: 1px solid black;
  flex-grow: 1;
`

class Main extends Component {
  render() {
    return (
      <Container>
        <GridDeCategorias></GridDeCategorias>
        <PaginaDeProdutos></PaginaDeProdutos>
        <FormularioDeCriacao></FormularioDeCriacao>
        <Carrinho></Carrinho>
      </Container>
    )
  }
}

export default Main