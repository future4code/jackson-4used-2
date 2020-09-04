import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  width: 20vw;
  align-self: stretch;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Botao = styled.button`
  margin-top: 20px;
`;

class Carrinho extends Component {
  render() {
    return (
      <Container>
        {this.props.carrinho.map((produto) => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <span>{produto.quantidade}</span>
            <button onClick={() => this.props.adicionarQuantidade(produto.id)}>
              +
            </button>
            <button onClick={() => this.props.diminuirQuantidade(produto.id)}>
              -
            </button>
          </div>
        ))}
        <p>Valor Total</p>
        <select>
          <option>à vista</option>
          <option>Cartão</option>
        </select>
        <Botao>Finalizar Compra</Botao>
      </Container>
    );
  }
}

export default Carrinho;
