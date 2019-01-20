import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

class App extends Component {
  state = {
    persons: [
      {id: 'abc123', name: 'Dave', age: 35},
      {id: 'cba321', name: 'Tina', age: 31},
      {id: 'adsf12', name: 'Blah', age: 33},
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const willShow = this.state.showPersons;
    this.setState({
      showPersons: !willShow
    })
  }

  render() {
    let persons = null
    let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            deleteHandler={this.deletePersonHandler}
            nameChangeHandler={this.nameChangeHandler}
          />
        </div>
      )
    }

    const assignedClasses = []

    if (this.state.persons.length <= 2) {
      assignedClasses.push('red')
    }else if (this.state.persons.length <= 1) {
      assignedClasses.push('bold')
    }

    return (
      <div className='App'>
        <Cockpit
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
