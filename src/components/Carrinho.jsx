import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
 
  border: 1px solid black;
  height: 100vh;
  width: 20vw;
`

class Carrinho extends Component {
  render() {
    return (
      <Container>
        <p>Item do Carrinho</p>
        <span>Quantidade</span>
        <button>+</button>
        <button>-</button>
        <p>Valor Total</p>
        <select>
          <option>à vista</option>
          <option>Cartão</option>
        </select><br/>
        <button>Finalizar Compra</button>

      </Container>
    )
  }
}

export default Carrinho