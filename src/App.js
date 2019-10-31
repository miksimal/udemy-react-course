import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';

class App extends Component {
  state = {
    persons: [
      { name: "mik", age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Max', age: 26 },
    ],
    users: { username: "Mikkidymeeep" }
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T this.state.persons[0].name = "Mikkel";
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: 'mikmik', age: 29 },
      { name: 'mikmikmik', age: 26 }
    ]})
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

  switchUserNameHandler = (event) => {
    this.setState( {
      users: { username: event.target.value }
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">        
          <h1>Hi</h1>
          <p>this is really working</p>
          <button 
          style = {style}
          onClick={() => this.switchNameHandler("MikMik!!")}>Switch Name</button>
          <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Mikkidymik!")}
          changed={this.nameChangedHandler} />
          <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} >My hobbies: coding</Person>
          <UserOutput 
          username = {this.state.users.username}>
          <UserInput 
          changed={this.switchUserNameHandler}
          currentUserName={this.state.users.username} />
          </UserOutput>
          
          <UserOutput username = "Mak"/>
          <UserOutput username = "Muk"/>
          
      </div>
    );
  }
}

export default App;