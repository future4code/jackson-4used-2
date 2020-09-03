import React, { Component } from 'react'
import styled from 'styled-components'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton';
import Launch from '@material-ui/icons/Launch';

const Container = styled.div`
  display: flex;
  justify-content: center;
`
class GridDeCategorias extends Component {
  render() {
    return (
      <Container>
        <GridList cols={3} cellHeight={300} spacing={1}>
          <GridListTile>
            <img src='https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='moças' />
            <GridListTileBar
              title='moças'
              actionIcon={
                <IconButton onClick={() => this.props.irParaPaginaDaCategoria('moças')} aria-label={`go to moças`}>
                  <Launch color="primary" />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src='https://images.unsplash.com/photo-1566802842272-e694af42eb29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=455&q=80' alt='rapazes' />
            <GridListTileBar
              title='rapazes'
              actionIcon={
                <IconButton onClick={() => this.props.irParaPaginaDaCategoria('rapazes')} aria-label={`go to rapazes`}>
                  <Launch color="primary" />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src='https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80' alt='kids' />
            <GridListTileBar
              title='kids'
              actionIcon={
                <IconButton onClick={() => this.props.irParaPaginaDaCategoria('kids')} aria-label={`go to kids`}>
                  <Launch color="primary" />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </Container>
    )
  }
}

export default GridDeCategorias