import React from 'react'
import Person from './Person/Person'

const Persons = (props) => ( // es6 syntax if no logic statements can omit return
  props.persons.map((person, index) => { // () needed in map when more than one arg
    return <Person
      key={person.id}
      deleteHandler={() => {props.deleteHandler(index)}}
      name={person.name}
      age={person.age}
      nameChange={(event) => {props.nameChangeHandler(event, person.id)}}
    />
  })
)


export default Persons
