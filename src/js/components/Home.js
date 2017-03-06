import React from "react";

import Contact from "../contact/Contact";

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      contacts: props.contacts
    }
  }
  updateSearch(e){
    this.setState({
      search: e.target.value
    });
  }
  addContact(e){
    e.preventDefault();
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = this.state.contacts.length;
    this.setState({
      contacts: this.state.contacts.concat({id: id + 1, name, phone})
    })
    this.refs.name.value = '';
    this.refs.phone.value = '';
  }
  render() {
    let filterContacts = this.state.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1;
      }
    );
    return (
      <div class="Home">
        <input type="text" onChange={ this.updateSearch.bind(this) } value={ this.state.search } placeholder="Search for someone!" />
        <form onSubmit={ this.addContact.bind(this) }>
          <input type="text" ref="name" />
          <input type="text" ref="phone" />
          <input type="submit" />
        </form>
        <ul>
          {
            filterContacts.map((contact, i) => { return <Contact contact={ contact } key={i} /> })
          }
        </ul>
      </div>
  )}
}
