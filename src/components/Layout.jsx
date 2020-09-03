import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`
class Layout extends Component {
  state = {
    mostrarCarrinho: false,
  }


  mudarVisibilidadeDoCarrinho = () => {
    this.setState({mostrarCarrinho: !this.state.mostrarCarrinho})
  }

  render() {
    return (
      <Container>
        <Header
          irParaPaginaDaCategoria={this.props.irParaPaginaDaCategoria}
          mudarPagina={this.props.mudarPagina}
          paginaAtual={this.props.paginaAtual}
          mostrarCarrinho={this.mudarVisibilidadeDoCarrinho}
        />
        <Main
          mostrarCarrinho={this.state.mostrarCarrinho}
          categoriaAtual={this.props.categoriaAtual}
          irParaPaginaDaCategoria={this.props.irParaPaginaDaCategoria}
          paginaAtual={this.props.paginaAtual}
        />
        <Footer />
      </Container>
    )
  }
}

export default Layout