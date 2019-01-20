import React from 'react'

const Person = (props) => {
  return(
    <div>
      <h1 onClick={props.deleteHandler}>Hi! My name is {props.name}</h1>
      <h3>I am {props.age} years old</h3>
      <input onChange={props.nameChange} value={props.name}/>
    </div>
  )
}

export default Person
