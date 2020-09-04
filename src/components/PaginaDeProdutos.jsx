import React, { Component } from "react";
import styled from "styled-components";

import GridDeProdutos from "./GridDeProdutos";
import Filtros from "./Filtros";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class PaginaDeProdutos extends Component {
  state = {
    inputDeValorMaximo: 0,
    inputDeValorMinimo: 0,
    inputDeOrdenacao: ''
  }
  
  alteraValorMaximo = (e) => {
    this.setState({inputDeValorMaximo: e.target.value})
  }
  alteraValorMinimo = (e) => {
    this.setState({inputDeValorMinimo: e.target.value})
  }
  alteraOrdenacao = (e) => {
    console.log(e.target.value)
    this.setState({inputDeOrdenacao: e.target.value})
  }

  render() {
    return (
      <Container>
        <h2>{this.props.categoriaAtual}</h2>
        <Filtros
          inputDeValorMaximo={this.state.inputDeValorMaximo}
          inputDeValorMinimo={this.state.inputDeValorMinimo}
          inputDeOrdenacao={this.state.inputDeOrdenacao}
          alteraValorMaximo={this.alteraValorMaximo}
          alteraValorMinimo={this.alteraValorMinimo}
          alteraOrdenacao={this.alteraOrdenacao}
        />
        <GridDeProdutos
          filtroDeValorMaximo={this.state.inputDeValorMaximo}
          filtroDeValorMinimo={this.state.inputDeValorMinimo}
          ordenacao={this.state.inputDeOrdenacao}
          filtroDeBusca={this.props.filtroDeBusca}
          categoriaAtual={this.props.categoriaAtual}
          adicionarProdutoAoCarrinho={this.props.adicionarProdutoAoCarrinho}
        />
      </Container>
    );
  }
}

export default PaginaDeProdutos;
