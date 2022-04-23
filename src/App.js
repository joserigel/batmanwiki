import React from "react";
import "./App.css"

import { GoSearch } from "react-icons/go"


export default function App() {
  return (
    <MainHeader/>
  );
}

class MainHeader extends React.Component {
  render() {
    return (
      <header className="mainHeader">
        <ul className="horizontalList">
          <li><img src="./img/TheBatman.png" height={55}/></li>
          <li><SearchForm/></li>
        </ul>
      </header>
    );
  }
}


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    //to fill
  }
  handleSubmit(event) {
    //to fill
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul className="horizontalList searchBar">
          <li><GoSearch className="icon" /></li>
          <li><input type="text" placeholder="Search"/></li>
        </ul>
      </form>
    );
  }
}