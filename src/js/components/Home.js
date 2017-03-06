import React from "react";

import Contact from "../contact/Contact";

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  updateSearch(e){
    e.preventDefault();
    this.setState({
      search: e.target.value
    })
  }
  render() {
    let filterContacts = this.props.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1;
      }
    );
    return (
      <div class="Home">
      <input type="text" onChange={ this.updateSearch.bind(this) } value={ this.state.search } placeholder="Search for someone!" />
        <ul>
          {
            filterContacts.map((contact, i) => { return <Contact contact={ contact } key={i} /> })
          }
        </ul>
      </div>
  )}
}
