import React, { Component } from "react";
import styled from "styled-components";

import GridDeCategorias from "./GridDeCategorias";
import PaginaDeProdutos from "./PaginaDeProdutos";
import FormularioDeCriacao from "./FormularioDeCriacao";
import Carrinho from "./Carrinho";

const Container = styled.main`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 10vw;
  margin-right: 10vw;
  padding: 15px;
  gap: 15px;
`;

class Main extends Component {
  state = {
    carrinho: [],
  };

  adicionarProdutoAoCarrinho = (nome, id, preco) => {
    const novoCarrinho = [...this.state.carrinho];
    const iten = novoCarrinho.find((iten) => iten.id === id);
    if (iten) {
      iten.quantidade += 1;
    } else {
      novoCarrinho.push({ nome, id, preco, quantidade: 1 });
    }
    this.setState({ carrinho: novoCarrinho });
  };

  adicionarQuantidade = (id) => {
    const novoCarrinho = [...this.state.carrinho];
    const iten = novoCarrinho.find((iten) => iten.id === id);
    iten.quantidade += 1;
    this.setState({ carrinho: novoCarrinho });
  };

  diminuirQuantidade = (id) => {
    const novoCarrinho = [...this.state.carrinho];
    const iten = novoCarrinho.find((iten) => iten.id === id);
    iten.quantidade -= 1;
    this.setState({
      carrinho: novoCarrinho.filter((iten) => iten.quantidade > 0),
    });
  };

  limparCarrinho = () => {
    if (this.state.carrinho.length === 0) {
      alert('Oxe! Tu comprasse nada e já quer pagar?')
    } else {
      alert('Valeu por encher meu bolso!')
      this.setState({carrinho: []})
    }
  }

  escolheComponenteParaRenderizar = () => {
    switch (this.props.paginaAtual) {
      case 2:
        return (
          <PaginaDeProdutos
            adicionarProdutoAoCarrinho={this.adicionarProdutoAoCarrinho}
            categoriaAtual={this.props.categoriaAtual}
            filtroDeBusca={this.props.filtroDeBusca}
          />
        );
      case 3:
        return <FormularioDeCriacao />;
      default:
        return (
          <GridDeCategorias
            irParaPaginaDaCategoria={this.props.irParaPaginaDaCategoria}
          />
        );
    }
  };

  render() {
    return (
      <Container>
        {this.escolheComponenteParaRenderizar()}
        {this.props.mostrarCarrinho && this.props.paginaAtual !== 3 && (
          <Carrinho
            carrinho={this.state.carrinho}
            adicionarQuantidade={this.adicionarQuantidade}
            diminuirQuantidade={this.diminuirQuantidade}
            limparCarrinho={this.limparCarrinho}
          />
        )}
      </Container>
    );
  }
}

export default Main;
