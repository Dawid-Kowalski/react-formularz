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

class ContactList extends React.Component {

	contacts = [
		  {
		    id: 1,
		    firstName: 'Jan',
		    lastName: 'Nowak',
		    email: 'jan.nowak@example.com',
		  },
		  {
		    id: 2,
		    firstName: 'Adam',
		    lastName: 'Kowalski',
		    email: 'adam.kowalski@example.com',
		  },
		  {
		    id: 3,
		    firstName: 'Zbigniew',
		    lastName: 'Koziol',
		    email: 'zbigniew.koziol@example.com',
		  }
		]

	render() {
		return (
			<div>
				<Contact contacts={this.contacts} />
			</div>
		)
	}
}

class Contact extends React.Component {
	render() {
		return (
			<div>
				{this.props.contacts.map( contact => 
					<div>
						<p>{contact.firstName}</p>
						<p>{contact.lastName}</p>
						<p>{contact.email}</p>
					</div>
				)}
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
				<ContactList />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))