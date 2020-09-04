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
        <img onClick={() => this.props.mudarPagina("CONSUMIDOR")} src={LogoSemLogoMarca} width='60px' height='40px' alt='logo' ></img>
        {this.props.paginaAtual === 2 && <TextField onChange={this.props.alteraInputDeBusca} value={this.props.inputDeBusca} label="Buscar" size="small" variant="outlined" />}
        <Button onClick={() => this.props.mudarPagina("CONSUMIDOR")}>inicio</Button>
        <Button onClick={() => this.props.irParaPaginaDaCategoria('moças')}>Moças</Button>
        <Button onClick={() => this.props.irParaPaginaDaCategoria('rapazes')}>Rapazes</Button>
        <Button onClick={() => this.props.irParaPaginaDaCategoria('kids')}>Kids</Button>
        <Button onClick={this.props.mostrarCarrinho}>
          <LocalGroceryStoreIcon color='primary'/>
        </Button>
        {
          this.props.paginaAtual === 3 
          ? (
            <Button onClick={() => this.props.mudarPagina("CONSUMIDOR")} variant="contained" color="primary">
              Quero Comprar
            </Button>
          )
          : (
            <Button onClick={() => this.props.mudarPagina("FORNECEDOR")} variant="contained" color="secondary">
              Quero Vender
            </Button>
          )
        }
      </Container>
    )
  }
}

export default Header