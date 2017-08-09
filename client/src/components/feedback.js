import React from 'react';
import {connect} from 'react-redux';

class Feedback extends React.Component {

  render() {
    return (
    <section className='feedback'>
      <h2>{this.props.currentQuestion.answer}</h2>
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
