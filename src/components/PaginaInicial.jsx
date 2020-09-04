import React from 'react'
import styled from "styled-components"
import image from '../img/LogoComLogoMarca.png';
import {Button} from '@material-ui/core';

const Inicial = styled.div`
height:100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: #FFFCEF;

`;
const ContainerBut = styled.div`
display: flex;
width: 40vw;
justify-content: space-around;

`;

const BotaoComprar = styled(Button)`
width:200px;
background-color: #43ADA5;
`;
const BotaoVender = styled(Button)`
width:200px;
background-color: #FCCA64;

`

export default function PaginaInicial(props)  {

    return (
      <Inicial>

        <p><img src={image}  style={{width: "25vw", height: "30vh", objectFit: "contain", marginBottom: "10vh"}} alt='logo' /></p>
        
        <ContainerBut>

            <BotaoComprar onClick={() => props.mudarPagina("CONSUMIDOR")} style={{backgroundColor: "#43ADA5"}} size="large" variant="contained"  color="primary">Quero Comprar</BotaoComprar>
            <BotaoVender onClick ={() => props.mudarPagina("FORNECEDOR")} style={{backgroundColor: "#FCCA64"}} size="large" variant="contained" color="primary">Quero Vender</BotaoVender>
          
        </ContainerBut>

      </Inicial>
      
    )
  
}
