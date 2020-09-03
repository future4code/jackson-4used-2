import React, { Component } from 'react'
import styled from 'styled-components'

import Produto from './Produto'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

`

class GridDeProdutos extends Component {
  render() {
    return (
      
      <Container>
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />

      </Container>
    )
  }
}

export default GridDeProdutos