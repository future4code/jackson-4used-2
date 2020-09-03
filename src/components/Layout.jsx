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
  render() {
    return (
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    )
  }
}

export default Layout