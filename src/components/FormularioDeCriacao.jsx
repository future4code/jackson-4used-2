import React, { Component } from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  border: 2px solid black;
`;

const Formulario = styled.form`
height: 90vh;
display: flex;
align-items: center;
flex-direction: column;
gap: 15px;
`
const Titulo = styled.h2`
text-transform: uppercase;
text-align: center;
`;

const Input = styled(TextField)`
width: 80vw;
`
const Botao = styled(Button)`
width: 200px;

`

class FormularioDeCriacao extends Component {
  render() {
    return (
      <Container>
        <Formulario>
          <Titulo>cadastro do produto</Titulo>

          <Input id="outlined-basic" label="Nome do Produto" variant="outlined" />
          <Input id="outlined-basic" label="Descrição" variant="outlined" />
          <Input id="outlined-basic" label="Preço (R$)" variant="outlined" type="number"/>
          <Input id="outlined-basic" label="Metodo de Pagamento" variant="outlined" />
          <Input id="outlined-basic" label="Categoria" variant="outlined" />
          <Input id="outlined-basic" label="Fotos" variant="outlined" />
          <Input id="outlined-basic" label="Quantidade" variant="outlined" />
          <Botao variant="contained">Criar Produto</Botao>

        </Formulario>
      </Container>
    );
  }
}

export default FormularioDeCriacao;
