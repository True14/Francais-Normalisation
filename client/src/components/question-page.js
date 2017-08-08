import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
import Logo from './logo';
import {Link} from 'react-router-dom'

        // this.state.questions.map((question, index) =>
        //     <li key={index}>{question}</li>
        //

        return (
            <div id='question-container'>
                 <div className='logout-box'>
                    <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
                </div>
                <Logo />
                <div className='question-box'>
                    <ul className="question-list">
                        {/* {questions} */}
                    </ul>
                    <Link to='#'onClick={() =>{this.props.dispatch(updateScore(1000000, this.props.score.id))}}><p className='next-link'>next</p></Link>
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

// export default QuestionPage;
export default connect(mapPropsToState)(QuestionPage)
