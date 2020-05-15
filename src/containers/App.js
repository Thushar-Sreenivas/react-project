import React, { Component } from 'react';
import './App.css';
import Persons from "../components/Persons/Persons"
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'A1', name: "Thushar", age: 91},
      {id: 'A2', name: "Ragnar", age: 75},
      {id: 'A3', name: "Lagertha", age: 63},
      {id: 'A4', name: "Rollo", age: 44},
      {id: 'A5', name: "Bjorn", age: 28},
      {id: 'A6', name: "Athelstan", age: 38},
      {id: 'A7', name: "Floki", age: 50},
      {id: 'A8', name: "Aethelwulf", age: 18},

    ],
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {
    const person = [...this.state.persons]
    person.splice(personIndex, 1)
    this.setState({ persons: person }) 
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id
    }) 

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons:persons })

  }


  toggleNameHandler = () => {
    const doesShow= this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
            
    let buttonValue = "Click me to view the kings of old"
    let persons = null
    
    if (this.state.showPersons) {
      persons = (
      <div>
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler}
        />
      </div>  
        )
      
      buttonValue = "Here are the Legendary Kings"     
      //  classes = ['red','bold'].join(' ')
    }
    

    return (
      <div className="App">
         <Cockpit 
         title= {this.props.appTitle}
         buttonValue={buttonValue}
         showPersons={this.state.showPersons}
         personsLength={this.state.persons.length}
         clicked={this.toggleNameHandler}/>
        {persons}
      </div>
    )
  }
}
export default App;




























/* {this.state.showPersons ? 
        <div>
            <Person name={this.state.persons[0].name} age = {this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} click = {this.switchNameHandler.bind(this, "Legendary Thushar")} />      
            <Person name={this.state.persons[2].name} age = {this.state.persons[2].age} />
            <Person name={this.state.persons[3].name} age = {this.state.persons[3].age} />      
            <Person name={this.state.persons[4].name} age = {this.state.persons[4].age} changed = {this.changeNameHandler}/>
            <Person name={this.state.persons[5].name} age = {this.state.persons[5].age} />      
        </div>: null } */



// let persons = null
//     if (this.state.showPersons) {
//       persons = (
//       <div>
//             <Person name={this.state.persons[0].name} age = {this.state.persons[0].age} />
//             <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} click = {this.switchNameHandler.bind(this, "Legendary Thushar")} />      
//             <Person name={this.state.persons[2].name} age = {this.state.persons[2].age} />
//             <Person name={this.state.persons[3].name} age = {this.state.persons[3].age} />      
//             <Person name={this.state.persons[4].name} age = {this.state.persons[4].age} changed = {this.changeNameHandler}/>
//             <Person name={this.state.persons[5].name} age = {this.state.persons[5].age} />      
//         </div> )
//     }




// import React, {useState} from 'react';
// import './App.css';
// import Person from "./Person/Person"

// function App() {

//   const [personsState, setPersonsState] = useState(  {
//         persons: [
//       {name: "Thushar", age: "21"},
//       {name: "Ragnar", age: "55"},
//       {name: "Lagertha", age: "43"},
//       {name: "Daenerys", age: "24"},
//       {name: "Bjorn", age: "28"},
//       {name: "Aragon", age: "221"}
//     ]
//   }      )
//   const [otherState, setotherState] = useState({
//     otherState: "Some value, RARR!!"
//   })  
    
        
//     console.log(personsState)
//     const switchNameHandler = () => {     
//         setPersonsState( {
//           persons: [
//             {name: "Thushi", age: "21"},
//             {name: "Ragnar", age: "55"},
//             {name: "Lagertha", age: "43"},
//             {name: "Daenerys", age: "24"},
//             {name: "Bjorn", age: "28"},
//             {name: "Aragon", age: "221"}
//           ]
//         }    
//         )
//       }
    

//   return (
//     <div className="App">
//       <h1>Hello I am a Viking</h1>
//       <p>I love to get to know you</p>
//       <button onClick={switchNameHandler} >Click Me!!</button>
//       <p>{otherState.otherState}</p>
//       <Person name={personsState.persons[0].name} age = {personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age = {personsState.persons[1].age} />      
//       <Person name={personsState.persons[2].name} age = {personsState.persons[2].age}  />
//       <Person name={personsState.persons[3].name} age = {personsState.persons[3].age} />      
//       <Person name={personsState.persons[4].name} age = {personsState.persons[4].age} />
//       <Person name={personsState.persons[5].name} age = {personsState.persons[5].age} /> 

//     </div>
//   );
// }

// export default App;