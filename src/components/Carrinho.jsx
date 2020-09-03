import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
  width: 20vw;
  align-self:stretch;
  padding: 20px;
  display:flex;
  flex-direction: column;
  

`

const Botao = styled.button`
margin-top: 20px

`


class Carrinho extends Component {
  render() {
    return (
     
      <Container>
        <div>
          
        <p>Item do Carrinho</p>
        <span>Quantidade</span>
        <button>+</button>
        <button>-</button>
        </div>
        <p>Valor Total</p>
        <select>
          <option>à vista</option>
          <option>Cartão</option>
        </select>
        <Botao>Finalizar Compra</Botao>

      </Container>
    )
  }
}

export default Carrinho