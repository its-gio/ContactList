import React from "react";

import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

let contacts = [{
  name: "Gio",
  phone: "555-555-5555"
},{
  name: "Kevin",
  phone: "777-555-5555"
},
{
  name: "Vic",
  phone: "555-666-5555"
},
{
  name: "Moose",
  phone: "555-555-9999"
}]

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home contacts={ contacts }/>
        <Footer />
      </div>
  )}
}
