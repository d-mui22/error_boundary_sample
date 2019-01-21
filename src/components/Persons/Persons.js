import React from 'react'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
const Persons = (props) => ( // es6 syntax if no logic statements can omit return
  props.persons.map((person, index) => { // () needed in map when more than one arg
    return <ErrorBoundary key={person.id}>
      <Person
      key={person.id}
      deleteHandler={() => {props.deleteHandler(index)}}
      name={person.name}
      age={person.age}
      nameChange={(event) => {props.nameChangeHandler(event, person.id)}}
      />
    </ErrorBoundary>
  })
)


export default Persons
