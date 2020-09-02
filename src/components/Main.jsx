import React, { Component } from 'react'
import styled from 'styled-components'

import GridDeCategorias from './GridDeCategorias'
import PaginaDeProdutos from './PaginaDeProdutos'
import Filtros from './Filtros'
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
        <h1>Main</h1>
        <GridDeCategorias></GridDeCategorias>
        <PaginaDeProdutos></PaginaDeProdutos>
        <Filtros></Filtros>
        <GridDeProdutos></GridDeProdutos>
        <FormularioDeCriacao></FormularioDeCriacao>
        <Carrinho></Carrinho>
      </Container>
    )
  }
}

export default Main