import React, { Component } from 'react';
import './App.css';
import Person from './components/Persons/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'abc123', name: 'Dave', age: 35},
      {id: 'cba321', name: 'Tina', age: 31},
      {id: 'adsf12', name: 'Blah', age: 33},
    ],
    otherState: 'something else',
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
    persons.splic(personIndex, 1)
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            )
          })}
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
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
