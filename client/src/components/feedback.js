import React from 'react';
import {connect} from 'react-redux';

class Feedback extends React.Component {

  render() {
    let result;
    if(!this.props.currentQuestion) {
      return <p>no questions</p>
    }
    if(this.props.userAnswer !== this.props.currentQuestion.answer) {
      result = <p>Wrong</p>
    }else {
      result = <p>Correct!</p>
    }
    return (
    <section className='feedback'>
      <h2>Result</h2>
      {result}
      <span>Your answer: {this.props.userAnswer}</span>
      <span>Correct answer: {this.props.currentQuestion.answer}</span>
      <button className='submit' type='submit' onSubmit={this.onSubmit}>Next</button>
    </section>
   )
 }
}

const mapPropsToState = (state,props) => {
  return {
    currentQuestion: state.currentQuestion,
    userAnswer: state.userAnswer,
  }
}
export default connect(mapPropsToState)(Feedback)
