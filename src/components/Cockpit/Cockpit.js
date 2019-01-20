import React from 'react'

const Cockpit = (props) => {
  let persons = null

  return (
    <div>
      <h1>React File Structure Sample</h1>
      <button onClick={props.toggle}>Toggle Persons</button>
      {persons}
    </div>
  )
}

export default Cockpit
