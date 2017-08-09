import React from 'react';
import {connect} from 'react-redux';
import Logo from './logo';
import {getQuestions} from '../actions';
import Question from './question';
import Feedback from './feedback';
// import './question-page.css'

class QuestionPage extends React.Component {

    componentDidMount() {
      this.props.dispatch(getQuestions())
    }

    render() {
      let resultComponent;
      if(!this.props.questions.length) {
         return <p>Could not load questions</p>;
      }

      if(this.props.showFeedback) {
        resultComponent = <Feedback />
      }

      return (
        <div id='question-container'>
          <Logo />
          <div className='question-box'>
            <Question />
          </div>
          {resultComponent}
          <div className='logout-box'>
            <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
          </div>
        </div>
      );
    }
}
const mapPropsToState = (state,props) => {
    return {
        questions: state.questions,
        score:state.score,
        showFeedback: state.showFeedback
    }
}

export default connect(mapPropsToState)(QuestionPage)
