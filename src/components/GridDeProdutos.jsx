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
        console.log(response);
      })
      .catch((error) => {
        alert("Erro ao buscar produtos");
      });
  };

  render() {
    return (
      <Container>
        {this.state.listaDeProdutos
          .filter(item => item.category === this.props.categoriaAtual)
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
