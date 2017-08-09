import React from 'react';
import {connect} from 'react-redux';
import Logo from './logo';
import {getLessons} from '../actions';
import Question from './question';
import './question-page.css'

class QuestionPage extends React.Component {

    componentDidMount() {
      this.props.dispatch(getLessons())
    }

    render() {
      if(!this.props.questions.length) {
         return <p>Could not load questions</p>;
      }

      return (
        <div id='question-container'>
          <div className='logout-box'>
            <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
              </div>
              <Logo />
              <div className='question-box'>
                <Question />
              </div>
          </div>
      );
    }
}
const mapPropsToState = (state,props) => {
    return {
        questions: state.questions,
        score:state.score
    }
}

export default connect(mapPropsToState)(QuestionPage)
