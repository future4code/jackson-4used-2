import React, { Component } from 'react'
import styled from 'styled-components'

import GridDeCategorias from './GridDeCategorias'
import PaginaDeProdutos from './PaginaDeProdutos'
import FormularioDeCriacao from './FormularioDeCriacao'
import Carrinho from './Carrinho'

const Container = styled.main`
  display: flex;
  
  align-items: center;
  flex-grow: 1;
  margin-left: 10vw;
  margin-right: 10vw;
  padding: 15px;
  gap: 15px ;
`



class Main extends Component {
  state = {
    mostrarCarrinho: true,
  }

  escolheComponenteParaRenderizar = () =>{
    switch (this.props.paginaAtual){
      case 2:
        return <PaginaDeProdutos/>
      case 3:
        return <FormularioDeCriacao/>
      default:
        return <GridDeCategorias/>
    }
  }


  


  render() {
    return (
      <Container>
        {this.escolheComponenteParaRenderizar()}
        {(this.state.mostrarCarrinho && this.props.paginaAtual !== 3) &&  <Carrinho/>}
      </Container>
    )
  }
}

export default Main