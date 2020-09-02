import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
`
const ContainerCaixa = styled.div`
display: flex;
justify-content: space-around;
flex-wrap:wrap;
`
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
`
class Produto extends Component {
  render() {
    return (
      <Container>
      <ContainerCaixa>
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>    
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>    
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>    
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>    
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>    
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>    
        <Caixa>
          <img src='https://picsum.photos/200/100'/>
          <p>Nome do Produto</p>
          <p>Preço do Produto</p>
          <p>Descrição dos produtos</p>
          <button>Adcionar ao carrinho</button>
        </Caixa>         
      </ContainerCaixa>
      </Container>
    )
  }
}

export default Produto