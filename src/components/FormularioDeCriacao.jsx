import React, { Component } from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import axios from "axios"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

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
width: 60vw;
`
const Botao = styled(Button)`
width: 200px;

`

class FormularioDeCriacao extends Component {

  state = {
    name:"",
    description:"",
    price: 0,
    paymentMethod: "",
    category:"",
    photos: [],
    installments: 0, 
  }

  onChangeInputName = (e) => {
    this.setState({name: e.target.value})
}
  onChangeInputDescription = (e) => {
    this.setState({description: e.target.value})
}
  onChangeInputPrice = (e) => {
    this.setState({price: e.target.value})
}
  onChangeInputPaymentMethod = (e) => {
    this.setState({paymentMethod: e.target.value})
}
  onChangeInputCategory = (e) => {
    this.setState({category: e.target.value})
}
  onChangeInputPhotos = (e) => {
    this.setState({photos: e.target.value})
}
  onChangeInputInstallments = (e) => {
    this.setState({installments: e.target.value})
}

addProduto = () =>{
  const body = {
    name:this.state.name,
    description:this.state.description,
    price:this.state.price,
    paymentMethod:this.state.paymentMethod,
    category:this.state.category,
    photos:[this.state.photos],
    installments:this.state.installments
  }  
  
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products", body)
   
      .then((resposta) => {              
        alert("opa! Lembre que uma parte é minha e volte sempre!")
        this.setState({name:"",
        description:"",
        price: 0,
        paymentMethod: "",
        category:"",
        photos: [] ,
        installments: 0})
      })
      .catch((erro) => {
        alert("Algo deu errado jovem, tenta denovo!")
      })
}


  render() {
    return (
      <Container>
        <Formulario>
          <Titulo>cadastro do produto</Titulo>

          <Input value ={this.state.description} onChange={this.onChangeInputDescription} label="Descrição" variant="outlined" />
          <Input value ={this.state.price} onChange={this.onChangeInputPrice} label="Preço (R$)" variant="outlined" type="number"/>
          <Input value ={this.state.name} onChange={this.onChangeInputName} label="Nome do Produto" variant="outlined" />
          <Input value ={this.state.paymentMethod} onChange={this.onChangeInputPaymentMethod} label="Metodo de Pagamento" variant="outlined" />
          <Input value ={this.state.category} onChange={this.onChangeInputCategory} label="Categoria" variant="outlined" />
          <Input value ={this.state.photos} onChange={this.onChangeInputPhotos} label="Fotos" variant="outlined" />
          <Input value ={this.state.installments} onChange={this.onChangeInputInstallments} label="Quantidade" variant="outlined" />
          <Botao onClick={this.addProduto} variant="contained">Criar Produto</Botao>

        </Formulario>
      </Container>
    );
  }
}

export default FormularioDeCriacao;
