class Title extends React.Component {

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

class ContactForm extends React.Component {
	render() {
		return (
			<div>
				<form>
					<label>Imie</label>
					<input type="text" placeholder="imie"/>
					<label>Nazwisko</label>
					<input type="text" placeholder="nazwisko"/>
					<label>Email</label>
					<input type="email" placeholder="email"/>					
					<button type="submit">dodaj kontakt</button>
				</form>
			</div>
		)
	}
} 

class App extends React.Component {

	render() {
		return (
			<div>
				<Title title = 'Formularz'/>
				<ContactForm />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))