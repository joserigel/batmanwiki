import React from "react";
import "./App.css"

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
        <ul className="horizontalList">
          <li><i className="material-icons">cloud</i></li>
          <li><input className="" type="text"/></li>
        </ul>
      </form>
    );
  }
}