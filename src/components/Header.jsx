import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import LogoSemLogoMarca from '../img/LogoSemLogoMarca.png'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

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
        <img src={LogoSemLogoMarca} width='60px' height='40px' ></img>
        <TextField label="Buscar" size="small" variant="outlined" />
        <Button>inicio</Button>
        <Button>Moças</Button>
        <Button>Rapazes</Button>
        <Button>Kids</Button>
        <Button>
          <LocalGroceryStoreIcon color='primary'/>
        </Button>
        <Button variant="contained" color="primary">
          Quero Vender
        </Button>
      </Container>
    )
  }
}

export default Header