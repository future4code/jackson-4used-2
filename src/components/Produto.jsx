import React, { Component } from "react";
import styled from "styled-components";

const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  border-radius: 30px;
  flex: 1;
  min-width: 20vw;
  max-width: 22vw;
  height: 50vh;
  margin: 10px 0px;
  img {
    width: 100%;
  }
`;

class Produto extends Component {
  render() {
    return (
      <Caixa>
        <img src={this.props.imagem} alt="produto" />
        <p>{this.props.nome}</p>
        <p>{this.props.preco}</p>
        <p>{this.props.descricao}</p>
        <button
          onClick={() =>
            this.props.adicionarProdutoAoCarrinho(
              this.props.nome,
              this.props.id,
              this.props.preco
            )
          }
        >
          Adcionar ao carrinho
        </button>
      </Caixa>
    );
  }
}

export default Produto;
