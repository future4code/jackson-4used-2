import React, { Component } from 'react'
import styled from 'styled-components'

import GridDeCategorias from './GridDeCategorias'
import PaginaDeProdutos from './PaginaDeProdutos'
import GridDeProdutos from './GridDeProdutos'
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
        <GridDeProdutos></GridDeProdutos>
        <FormularioDeCriacao></FormularioDeCriacao>
        <Carrinho></Carrinho>
      </Container>
    )
  }
}

export default Main