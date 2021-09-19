import React, { Component } from 'react';
import Question from '../Question/Quiestion';
import './Questions.css';

class Questions extends Component {
    constructor(props){
        super(props);

     this.state = {
        
     }   
    
    }

   render() {
    return (
        <React.StrictMode>
        <div>
        <p>Hello! Didn't find what you are looking for?Please contact us.</p>
        <Question question='Question number 0'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 1'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 2'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 3'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 4'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 5'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 6'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 7'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 8'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        <Question question='Question number 9'>Lorem ipsum Lorem Lorem ipsum Lorem ipsum</Question>
        </div>
        </React.StrictMode>
    )
   }
}

export default Questions;
