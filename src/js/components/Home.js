import React from "react";

import Contact from "../contact/Contact";

export default class Home extends React.Component {
  render() {
    return (
      <div class="Home">
        <ul>
          {
            this.props.contacts.map((contact, i) => { return <Contact contact={ contact } key={i} /> })
          }
        </ul>
        <input type="text" />
      </div>
  )}
}
