import React, { Component } from 'react'
import styled from 'styled-components'
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  div {
    display: flex;
    align-items: center;
    
    * {
      margin: 0 2px;
    }
  }
`

class Filtros extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectOrdenar: ''
    }
  }
  
  handleSelect = (e) => {
    console.log('Mudou')
    this.setState({ selectOrdenar: e.target.value })
  }

  render() {
    return (
      <Container>
        <div>
          <TextField
            label="Valor Máximo"
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }}
          />
          <TextField
            label="Valor Mínimo"
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }}
          />
        </div>
        
        <div>
          <InputLabel id="ordenar">Ordenar</InputLabel>
          <Select
            id="ordenar"
            labelId="ordenar"
            value={this.state.selectOrdenar}
            onChange={this.handleSelect}
            displayEmpty
          >
            <MenuItem value="">Não ordenar</MenuItem>
            <MenuItem value={'maiorPreco'}>Por maior preço</MenuItem>
            <MenuItem value={'menorPreco'}>Por menor preço</MenuItem>
            <MenuItem value={'nome'}>Por nome</MenuItem>
          </Select>
        </div>
      </Container>
    )
  }
}

export default Filtros