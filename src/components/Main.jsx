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
    carrinho: [
      {
        nome: "calçarasgada",
        id: 1,
        preco: 10,
        quantidade: 1,
      },

      {
        nome: "jeans",
        id: 2,
        preco: 10,
        quantidade: 1,
      },

      {
        nome: "camiseta",
        id: 3,
        preco: 10,
        quantidade: 1,
      },

      {
        nome: "blusa",
        id: 4,
        preco: 10,
        quantidade: 1,
      },
    ],
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

  escolheComponenteParaRenderizar = () => {
    switch (this.props.paginaAtual) {
      case 2:
        return (
          <PaginaDeProdutos
            adicionarProdutoAoCarrinho={this.adicionarProdutoAoCarrinho}
            categoriaAtual={this.props.categoriaAtual}
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
          />
        )}
      </Container>
    );
  }
}

export default Main;
