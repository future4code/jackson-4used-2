import React, { Component } from 'react'
import styled from 'styled-components'

import Produto from './Produto'

const Container = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr 1fr 1fr;
  border: 1px solid black;
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