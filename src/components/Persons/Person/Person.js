import React from 'react'

const Person = (props) => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error('Something Failed')
  }
  
  return (
    <div>
      <h1 onClick={props.deleteHandler}>Hi! My name is {props.name}</h1>
      <h3>I am {props.age} years old</h3>
      <input onChange={props.nameChange} value={props.name}/>
    </div>
  )
}

export default Person
