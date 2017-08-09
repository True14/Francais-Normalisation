import React from 'react';
import {connect} from 'react-redux';

class AnswerCard extends React.Component {

  render() {
    return (
    <section className='answer-card'>
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
export default connect(mapPropsToState)(AnswerCard)
