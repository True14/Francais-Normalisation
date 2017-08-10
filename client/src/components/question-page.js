import React from 'react';
import {connect} from 'react-redux';
import {getQuestions, correct, toggleFeedback, incorrect} from '../actions';
import Question from './question';
import AnswerCard from './answer-card';
import DashHeader from './dash-header';
import '../css/question-page.css'

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
      let nextButton;
      let result;
      if(!this.props.currentQuestion) {
         return <p>Could not load questions</p>;
      }

      if(this.props.showFeedback) {
        result = <h3>{this.props.result}</h3>;
        nextButton = (
          <div className='next'>
            <button type='submit' onClick={this._onClick}>Next</button>
          </div>
        )
      }

      return (
        <div id='question-container'>
          <DashHeader />
          <div className='result'>
            {result}
          </div>
          <div className='question-box'>
            <Question />
            <AnswerCard />
          </div>
          {nextButton}
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
