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

  render() {
    return (
      <Container>
        <div>
          <TextField
            value={this.props.inputDeValorMaximo}
            onChange={this.props.alteraValorMaximo}
            label="Valor Máximo"
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            inputProps={{ min: this.props.inputDeValorMinimo, step: 100 }}
            type="number"
          />
          <TextField
            value={this.props.inputDeValorMinimo}
            onChange={this.props.alteraValorMinimo}
            label="Valor Mínimo"
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }}
            inputProps={{ min: 0, max: this.props.inputDeValorMaximo, step: 100}}
            type="number"
          />
        </div>
        
        <div>
          <InputLabel id="ordenar">Ordenar</InputLabel>
          <Select
            id="ordenar"
            labelId="ordenar"
            value={this.props.inputDeOrdenacao}
            onChange={this.props.alteraOrdenacao}
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