class NewContact {
  	constructor(id, firstName, lastName, email) {
	    this.id = id;
	    this.firstName=firstName;
	    this.lastName = lastName;
	    this.email = email;
  	}
}

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

	state = {
		contacts: this.props.contacts,
		newId: 3,
		newFirstName: '',
		newLastName: '',
		newEmail: ''
	}

	test = event => {
		event.preventDefault();
		this.state.newId++;

		let newContactList = this.state.contacts;
		let newContact = new NewContact(this.state.newId, this.state.newFirstName, this.state.newLastName, this.state.newEmail);
		newContactList.push(newContact);
		this.setState({contacts: newContactList});
		this.setState({newFirstName: ''});
		this.setState({newLastName: ''});
		this.setState({newEmail: ''});
	}

	changeFirstNameValue = event => {
		this.setState({newFirstName: event.target.value});
	}

	changeLastNameValue = event => {
		this.setState({newLastName: event.target.value});
	}

	changeEmailValue = event => {
		this.setState({newEmail: event.target.value});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.test}>
					<label>Imie</label>
					<input type="text" value={this.state.newFirstName}  onChange={this.changeFirstNameValue} placeholder="imie"/>
					<label>Nazwisko</label>
					<input type="text" value={this.state.newLastName} onChange={this.changeLastNameValue} placeholder="nazwisko"/>
					<label>Email</label>
					<input type="email" value={this.state.newEmail} onChange={this.changeEmailValue} placeholder="email"/>
					<button type="submit">dodaj kontakt</button>
				</form>
				<ContactList contacts={this.state.contacts} />
			</div>
		)
	}
}

class ContactList extends React.Component {

	render() {
		return (
			<div>
				<Contact contacts={this.props.contacts} />
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
				<Title title = 'Formularz'/>
				<ContactForm contacts={this.contacts}/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))