import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Produto from "./Produto";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;

class GridDeProdutos extends Component {
  state = {
    listaDeProdutos: [],
  };

  componentDidMount = () => {
    this.pegarProdutos();
  };

  pegarProdutos = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products"
      )
      .then((response) => {
        this.setState({ listaDeProdutos: response.data.products });
      })
      .catch((error) => {
        alert("Erro ao buscar produtos");
      });
  };

  produtosParaRenderizar = () => {
    const produtos = [...this.state.listaDeProdutos]

    switch (this.props.ordenacao) {
      case 'maiorPreco':
        return produtos.sort((a, b) => b.price - a.price) 
      case 'menorPreco':
        return produtos.sort((a, b) => a.price - b.price) 
      case 'nome':
        return produtos.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          } else {
            return -1
          }
        })
      default:
        return produtos
    }
  }

  render() {
    return (
      <Container>
        {this.produtosParaRenderizar()
          .filter(item => item.category === this.props.categoriaAtual)
          .filter(item => item.name.toLowerCase().includes(this.props.filtroDeBusca.toLowerCase()) || item.description.toLowerCase().includes(this.props.filtroDeBusca.toLowerCase()))
          .filter(item => Number(this.props.filtroDeValorMaximo) === 0 ? true : item.price >= this.props.filtroDeValorMinimo && item.price <= this.props.filtroDeValorMaximo)
          .map((item) => (
          <Produto
            key={item.id}
            adicionarProdutoAoCarrinho={this.props.adicionarProdutoAoCarrinho}
            nome={item.name}
            preco={item.price}
            imagem={item.photos[0]}
            metodoDePagamento={item.paymentMethod}
            categoria={item.category}
            quantidade={item.installments}
            descricao={item.description}
            id={item.id}
          />
        ))}
      </Container>
    );
  }
}

export default GridDeProdutos;
