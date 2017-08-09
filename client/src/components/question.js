import React from 'react';
import {connect} from 'react-redux';
import {setUserAnswer, toggleFeedback, setResult} from '../actions';

class Question extends React.Component {

  _onSumbit = (e) => {
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

  _onChange = e => {
    this.props.dispatch(setUserAnswer(e.target.value));

  }

  render() {
    if(!this.props.currentQuestion) {
      return <p>no questions</p>
    }

    if(this.props.showFeedback) {
    return (
       <div className='current-question'>
        <span>{this.props.currentQuestion.word}</span>
        <span>Your answer: {this.props.userAnswer}</span>
       </div>
      )
    }

    return (
      <form className='current-question' onSubmit={this._onSumbit} >
        {this.props.currentQuestion.word}
        <input type='text' value={this.props.userAnswer} onChange={this._onChange} />
      </form>
    )
  }
}

const mapPropsToState = (state,props) => {
  return {
    currentQuestion: state.currentQuestion,
    userAnswer: state.userAnswer,
    showFeedback: state.showFeedback,
  }
}
export default connect(mapPropsToState)(Question)
