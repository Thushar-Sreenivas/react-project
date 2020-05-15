import React from 'react'
import Person from './Person/Person'

const persons = (props) =>  props.persons.map( (eachElement, index ) => {
    return (<Person 
      name = {eachElement.name}
       age = {eachElement.age}
        key={eachElement.id}
         click={() => {props.clicked(index)} } 
         changed={(event) => {props.changed(event, eachElement.id)} }/>
              )
  } 
    )

    export default persons