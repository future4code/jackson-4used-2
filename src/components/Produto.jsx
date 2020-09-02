import React, { Component } from 'react'
import styled from 'styled-components'


const Caixa = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
border: solid 1px black;
border-radius: 30px;
flex:1;
min-width: 20vw;
max-width: 22vw;
height:50vh ;
margin: 10px 0px;
img{
  width: 100%
}
`

class Produto extends Component {
  render() {
    return (
     
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>
        
        
     
    )
  }
}

export default Produto