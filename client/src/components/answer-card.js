import React from 'react';
import { connect } from 'react-redux';

class AnswerCard extends React.Component {

  render() {
    let answer;
    if(this.props.showFeedback) {
      answer = <h2>{this.props.currentQuestion.answer}</h2>
    }
    return (
    <div className="answer-card">
      <h1>Answer: </h1>
      {answer}
    </div>
   )
 }
}

const mapPropsToState = state => ({
  currentQuestion: state.currentQuestion,
  userAnswer: state.userAnswer,
  showFeedback: state.showFeedback
});
export default connect(mapPropsToState)(AnswerCard)
