import React, { Component } from 'react'
import styled from "styled-components"
import image from '../Logo-Horizontal-03-1.png';
import Button from '@material-ui/core/Button';

const Inicial = styled.div`
height:100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`;

export default function PaginaInicial()  {


    
    return (
      <Inicial>

        <p><img src={image} style={{width: "15vw", height: "20vh", objectFit: "cover"}} /></p>
        
        <div>
        <Button size="large" variant="contained" color="primary">Quero Comprar</Button>
        <Button size="large" variant="contained" color="primary">Quero Vender</Button>
        </div>

      </Inicial>
      
    )
  
}
