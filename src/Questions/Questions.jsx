import React, { Component } from 'react';
import Question from '../Question/Quiestion';
import './Questions.css';

class Questions extends Component {
    constructor(props){
        super(props);

        this.state = {
            question: ''
        }
    }
   render() {
    return (
        <div>
        <p>Hello! Didn't find what you are looking for?Please contact us.</p>
        <Question answer='Lorem ipsum Lorem Lorem ipsum Lorem ipsum'>Question number 0</Question>
        <Question answer='Lorem ipsum Lorem Lorem ipsum Lorem ipsum'>Question number 1</Question>
        <Question answer='Lorem ipsum Lorem Lorem ipsum Lorem ipsum'>Question number 2</Question>
    </div>
    )
   }
}

export default Questions;
