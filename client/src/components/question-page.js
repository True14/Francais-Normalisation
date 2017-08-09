import React from 'react';
import {connect} from 'react-redux';
import Logo from './logo';
import {getQuestions, correct, toggleFeedback, incorrect} from '../actions';
import Question from './question';
import Feedback from './feedback';
// import './question-page.css'

class QuestionPage extends React.Component {

    componentDidMount = () => {
      this.props.dispatch(getQuestions())
    }

    _onClick = e => {
      if (this.props.userAnswer === this.props.currentQuestion.answer) {
        this.props.dispatch(correct())
      }else {
        this.props.dispatch(incorrect())
      }
      this.props.dispatch(toggleFeedback())
    }

    render() {
      let resultComponent;
      let nextButton;
      let result;
      if(!this.props.currentQuestion) {
         return <p>Could not load questions</p>;
      }

      if(this.props.showFeedback) {
        result = (
          <div className='result'>
            {this.props.result}
          </div>
        );
        resultComponent = <Feedback />
        nextButton = <button className='next' type='submit' onClick={this._onClick}>Next</button>
      }

      return (
        <div id='question-container'>
          <Logo />
          {result}
          <div className='question-box'>
            <Question />
          </div>
          {resultComponent}
          {nextButton}
          <div className='logout-box'>
            <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
          </div>
        </div>
      );
    }
}
const mapPropsToState = (state,props) => {
    return {
        currentQuestion: state.currentQuestion,
        userAnswer: state.userAnswer,
        showFeedback: state.showFeedback,
        result: state.result
    }
}

export default connect(mapPropsToState)(QuestionPage)
