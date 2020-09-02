import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const Container = styled.header`
  display:flex;
  justify-content: space-between;
  margin-left: 10vw;
  margin-right: 10vw;
  padding: 15px;
  
  
`

class Header extends Component {
  render() {
    return (
      <Container>
        ícone 
        <TextField label="Buscar" size="small" variant="outlined" />
        <Button>inicio</Button>
        <Button>Moças</Button>
        <Button>Rapazes</Button>
        <Button>Kids</Button>
        <Button>Carrinho</Button>
        <Button variant="contained" color="primary">
          Quero Vender
        </Button>
      </Container>
    )
  }
}

export default Header