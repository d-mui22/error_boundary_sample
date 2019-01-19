import React from 'react'

const Person = (props) => {
  return(
    <div>
      <h1 onClick={props.click}>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  )
}

export default Person
