import React from "react";

import PaginaInicial from "./components/PaginaInicial";
import Layout from "./components/Layout";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pagina: 1,
      categoriaAtual: null
    };
  }

  mudarPagina = (papel) => {
    const pagina = papel === "CONSUMIDOR" ? 4 : 3;
    this.setState({ pagina });
  };

  irParaPaginaDaCategoria = (categoria) => {
    this.setState({
      pagina: 2,
      categoriaAtual: categoria
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pagina === 1 ? (
          <PaginaInicial mudarPagina={this.mudarPagina} />
        ) : (
          <Layout mudarPagina={this.mudarPagina} irParaPaginaDaCategoria={this.irParaPaginaDaCategoria} categoriaAtual={this.state.categoriaAtual} paginaAtual={this.state.pagina}/>
        )}
      </React.Fragment>
    );
  }
}

export default App;
