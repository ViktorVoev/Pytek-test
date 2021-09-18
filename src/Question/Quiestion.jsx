import React from 'react';
import './Question.css';

class Question extends React.Component {

    constructor(props) {
      super(props)
  
      this.state = {
        isOpen: false
      }

      this.openClick = this.openClick.bind(this);
      this.closeClick = this.closeClick.bind(this);
    }
  
      openClick(event) {
        event.preventDefault();

        this.setState({ isOpen: true }, () => {
          document.addEventListener('click', this.closeClick, true)
        })
      }

      closeClick() {
        this.setState({ isOpen: false }, () => {
          document.removeEventListener('click', this.closeClick, true)
        })
      }
    

    render() {
      const { isOpen } = this.state;
  
      return (
        <React.StrictMode>
        <div
          className={isOpen ? "dropdown active" : "dropdown"}
          onClick={this.openClick} >
          <div className="dropdown__text">
            {this.props.question}
          </div>
          <div className="dropdown__items">{this.props.children}</div>
        </div>
        </React.StrictMode>
      )
    }
  
  
  
  }

export default Question;