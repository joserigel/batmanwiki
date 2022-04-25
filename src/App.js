import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import logo from "./img/TheBatman.png";
import background from "./img/background.jpg";

import { GoSearch } from "react-icons/go";


export default function App() {
  return (
    <wiki>
      <MainHeader/>
      <main>
        <Outlet/>
      </main>
    </wiki>
  );
}

class MainHeader extends React.Component {
  render() {
      return (
      <div>
          <header>
          <ul className="horizontalList">
              <li><img src={logo} className="logo"/></li>
              <li><SearchForm/></li>
          </ul>
          </header>
          <img src={background} className="background left"/>
          <img src={background} className="background right"/>
          
      </div>
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
  