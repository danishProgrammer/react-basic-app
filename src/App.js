import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';
import User from "./User/user";

class App extends Component {
  state = {
    persons:[
      {name:'Sam',age:'25'},
      {name:'Danish',age:'28'},
      {name:'Sunakshi',age:'25'},
    ]
  }

   switchNameHandler = ()=> {
    this.setState({
      persons:[
        {name:'Sameer',age:'22'},
       {name:'Danish',age:'21'},
       {name:'Sumesh',age:'35'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {this.state.persons.map(person => (<Person name={person.name} age={person.age}/>) )}
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}></Person>
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}>Hobbies: Cooking, Listening music.</Person>
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}></Person>
      
        <User></User>
        
      </div>
    );
  }
}

export default App;
