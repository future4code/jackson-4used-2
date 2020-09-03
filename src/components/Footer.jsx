import React, { Component } from 'react'
import styled from 'styled-components'
import coracaoFooter from '../img/coracaoFooter.png'


const Container = styled.footer`
  border: 1px solid black;
  border-bottom: none;
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: center;
  background-color:#43ADA5;
  height:8vh;
`

class Footer extends Component {
  render() {
    return (
      <Container>
        <p><strong>DESENVOLVIDO COM <img src={coracaoFooter} width="15px" alt='coracao'></img> PELA EQUIPE DE MARAVILHOSIDADES</strong></p> 
      </Container>
    )
  }
}

export default Footer