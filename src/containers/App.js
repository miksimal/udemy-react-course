import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserOutput from '../components/UserOutput/UserOutput.js';
import UserInput from '../components/UserInput/UserInput.js';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent.js';
import CharComponent from '../components/CharComponent/CharComponent.js';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { name: "mik", age: 28, key: "abc" },
      { name: 'Manu', age: 29, key: "def" },
      { name: 'Max', age: 26, key: "ghi" },
    ],
    users: { username: "Mikkidymeeep" },
    textInput: { text: "NoTextEntered" }
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
      { name: "Standard stuff", age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'mikmikmik', age: 26 }
    ]}
    )
  }
  
  newTextHandler = (event) => {
    this.setState( {
      textInput: { text: event.target.value }
    })
  }

  deleteLetterHandler = (index) => {
    let newText = this.state.textInput.text.replace(this.state.textInput.text.charAt(index), '');
    this.setState( {
      textInput: {text: newText}
    })
  }

  switchUserNameHandler = (event) => {
    this.setState( {
      users: { username: event.target.value }
    })
  }
  
  


  render() {
    

    const letterList = Array.from(this.state.textInput.text).map( (letter, index) => {
      return (
      <CharComponent 
      letter = {letter}
      key = {index}
      click = {() => this.deleteLetterHandler(index)} 
      /> );})

    return (
      <StyleRoot>
      <div className="App">        

          <Cockpit persons={this.state.persons} />

          <Persons 
            persons={this.state.persons}
            changed={this.nameChangedHandler} />    
          
          <UserOutput username = {this.state.users.username}>
          <UserInput 
          changed={this.switchUserNameHandler}
          currentUserName={this.state.users.username} />
          </UserOutput>
          <input 
          type = "text" 
          onChange = {this.newTextHandler}
          value={this.state.textInput.text} />
          <p>{this.state.textInput.text.length}</p>
          <ValidationComponent length={this.state.textInput.text.length} />
          {letterList}

          <UserOutput username = "Mak"/>
          <UserOutput username = "Muk"/>
          
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);