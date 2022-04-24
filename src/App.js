import React from "react";
import "./App.css";
import logo from "./img/TheBatman.png";
import background from "./img/background.jpg";

import { GoSearch } from "react-icons/go"


export default function App() {
  return (
    <wiki>
      <MainHeader/>
      <main>
        <Wiki>
          <Article title="The Batman">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              
            </p>
            
            <p>
              <img src="images/capedcrusader.jpg" height={130} className="right"/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Article>
        </Wiki>
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
            <li><img src={logo} height={55}/></li>
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

function Wiki(props) {
  return (
    <div className="article">
      <h1>The Batman Wiki</h1>
      <hr/>
      <MainDescription 
        img="./images/batman.jpeg" 
        name="Bruce Wayne" 
        height="185cm" 
        eye="Blue" 
        hair="Black"
        actor="Robert Pattinson"
        male={true}/>
        {props.children}
    </div>
  );
}

function MainDescription (props) {
  let actorText = (props.male)? "Actor" : "Actress";
  return (
    <div className="mainDescription">
      <h2>The Batman</h2>
      <img src={props.img}/>
      <table cellSpacing={0}>
        <tbody>
          <tr>
            <td>Real Name </td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Height </td>
            <td>{props.height}</td>
          </tr>
          <tr>
            <td>Eye Color</td>
            <td>{props.eye}</td>
          </tr>
          <tr>
            <td>Hair Color</td>
            <td>{props.hair}</td>
          </tr>
          <tr>
            <td>{actorText}</td>
            <td>{props.actor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Article(props) {
  return(
    <article>
      <h2>{props.title}</h2>
      {props.children}
    </article>
  );
}