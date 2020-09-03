import React from "react";

import PaginaInicial from "./components/PaginaInicial";
import Layout from "./components/Layout";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pagina: 1,
    };
  }

  mudarPagina = (papel) => {
    const pagina = papel === "CONSUMIDOR" ? 4 : 3;
    this.setState({ pagina });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.pagina === 1 ? (
          <PaginaInicial mudarPagina={this.mudarPagina} />
        ) : (
          <Layout  paginaAtual = {this.state.pagina}/>
        )}
      </React.Fragment>
    );
  }
}

export default App;
