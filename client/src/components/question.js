import React from 'react';
import {connect} from 'react-redux';
import {setUserAnswer, correct} from '../actions';

class Question extends React.Component {

  _onSumbit = (e) => {
    e.preventDefault();
    // if (this.props.userAnswer === this.props.currentQuestion.answer) {
    //   this.props.dispatch(correct(this.props.currentQuestion))
    // }else {
      this.props.dispatch(correct(this.props.currentQuestion))
    // }
  }

  _onChange = e => {
    this.props.dispatch(setUserAnswer(e.target.value));

  }

  render() {
    if(!this.props.currentQuestion) {
      return <p>no questions</p>
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
  }
}
export default connect(mapPropsToState)(Question)
