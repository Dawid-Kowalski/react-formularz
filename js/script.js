class Title extends React.Component {

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

class App extends React.Component {

	render() {
		return (
			<div>
				<Title title = 'Formularz'/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))