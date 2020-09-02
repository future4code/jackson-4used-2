import React from 'react'

import PaginaInicial from './components/PaginaInicial'
import Layout from './components/Layout'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			pagina: 2
		}
	}

	render() {
		return (
			<React.Fragment>
				{this.state.pagina === 1 ? <PaginaInicial /> : <Layout />}
			</React.Fragment>
		)
	}


}

export default App
