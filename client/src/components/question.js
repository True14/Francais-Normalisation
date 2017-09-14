import React from 'react';
import { connect } from 'react-redux';
import { setUserAnswer, toggleFeedback, setResult } from '../actions';

import '../css/question.css';

class Question extends React.Component {

  onSumbit = (e) => {
    e.preventDefault();
    if (this.props.userAnswer) {
      if (this.props.userAnswer === this.props.currentQuestion.answer) {
        this.props.dispatch(setResult('Correct'))
      }else {
        this.props.dispatch(setResult('Wrong'))
      }
      this.props.dispatch(toggleFeedback())
    }
  }

  onChange = e => {
    this.props.dispatch(setUserAnswer(e.target.value));

  }

  render() {
    if(!this.props.currentQuestion) {
      return <p>no questions</p>
    }

    if(this.props.showFeedback) {
    return (
       <div className="current-question">
        <h1>Question: </h1>
        <h2>{this.props.currentQuestion.word}</h2>
        <span>Your answer: {this.props.userAnswer}</span>
        <div className="correct">
          <p>Streak: {this.props.currentQuestion.right}</p>
        </div>
        <div className="incorrect">
          <p>Wrong: {this.props.currentQuestion.wrong}</p>
        </div>
       </div>
      )
    }

    return (
      <form className="current-question" onSubmit={this.onSumbit}>
        <h1>Question: </h1>
        <h2>{this.props.currentQuestion.word}</h2>
        <input type="text" value={this.props.userAnswer} placeholder="Your Answer" onChange={this.onChange} />
        <div className="correct">
          <p>Streak: {this.props.currentQuestion.right}</p>
        </div>
        <div className="incorrect">
          <p>Wrong: {this.props.currentQuestion.wrong}</p>
        </div>
      </form>
    )
  }
}

const mapPropsToState = state => ({
  currentQuestion: state.currentQuestion,
  userAnswer: state.userAnswer,
  showFeedback: state.showFeedback,
});
export default connect(mapPropsToState)(Question)
