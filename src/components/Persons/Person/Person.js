import React, { useRef } from "react"
import './Person.css'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDiv = styled.div`
    border: 1px solid #e7a61a;
    background-color: #e7a61a;
    width: auto;
    padding: 20px;
    box-shadow: 13px 15px 5px 0px rgba(0,0,0,0.75);
    margin: 15px;
    display: inline-block;
    text-align: center;
`

// function handleClick() {
//     textInput.current.focus();
//   }
// const myInput = useRef()

const person = (props) => {
    // const textInput = react.useRef(null);
    return ( 
        <StyledDiv>
                <h1 onClick={props.click}>Hey, I am {props.name}</h1>
                <h2>My Skill is {Math.floor(Math.random() * props.age)} </h2>
                <input type="text" 
                // ref={(inputEl) => {this.inputElement = inputEl}}
                // ref={textInput}
                // myInput.current.focus()
                // inputRef={myInput.focus()}
                onChange= {props.changed} 
                value={props.name}/>
            
                <h3>{props.children}</h3> 
        </StyledDiv>
    )
// person.propTypes = {
//     click: PropTypes.func,
//     name: PropTypes.string,
//     age: PropTypes.number,
//     changed: PropTypes.func
// }

}

export default person