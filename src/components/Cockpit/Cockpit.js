import React, { useRef } from 'react'
import styled from 'styled-components'
import Auxiliary from '../../hoc/Auxiliary'
import './Cockpit.css'
// import classes from './Cockpit.css'


const StyledButton = styled.button`
      background-color: #e7a61a;
      background-color: ${props => props.alt? 'blueviolet' : '#e7a61a'};
      border: 1px solid #e7a61a;
      padding: 10px;
      box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
      display: flex-inline;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: red;
      }
  `


const cockpit = (props) => {
    // const toggleBtnRef = useRef(null)
    // toggleBtnRef.current.click()

    let classes = []
    if (props.personsLength < 4){
       classes.push('color')
    }
    else {
       classes.push('red','bold')
    }

    return(
        <React.Fragment>  
        <h1>Welcome to Viking World</h1>
        <h2 className={classes.join(' ')}>Witness the Adventure of the Great Heroes</h2>
    <StyledButton 
    // ref= {toggleBtnRef}
    alt={props.showPersons} 
    onClick={props.clicked}>
      {props.buttonValue}</StyledButton>
    {/* <StyledButton alt={props.showPersons} onClick={props.clicked}>{props.buttonValue}</StyledButton> */}
        </React.Fragment>  )

} 
export default React.memo(cockpit)