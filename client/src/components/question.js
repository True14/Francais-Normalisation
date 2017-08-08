import React from 'react';


class Question extends React.Component {

  _onSumbit = (e) => {
    e.preventDefault();
  }

  _onChange = input => {
    this.prop
  }
  render() {
    if(!this.props.currentQuestion) {
      return <p>no questions</p>
    }
    return (
      <form className='current-question' _onSumbit>
        {this.props.currentQuestion.word}
        <input type='text' />
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
export default Question
