import React from 'react';
import './Question.css';

class Question extends React.Component {

    constructor(props) {
      super(props)
  
      this.state = {
        isOpen: false
      }
    }
  
    handleClick = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    

    render() {
      const {isOpen} = this.state;
  
      return (
        <div
          className={isOpen ? "dropdown active" : "dropdown"}
          onClick={this.handleClick} >
          <div className="dropdown__text">
            {this.props.children}
          </div>
          <div className="dropdown__items">{this.props.answer}</div>
        </div>
      )
    }
  
  
  
  }

export default Question;