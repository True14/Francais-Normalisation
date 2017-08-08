import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
import Logo from './logo';
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import questionpage from './question-page.css'
import {getLessons, getScore, updateScore} from '../actions';
=======
import './question-page.css'
>>>>>>> 9d0a9af141e31b14d118f0b38a8d9cc7a88ec511

class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        // const accessToken = Cookies.get('accessToken');
        // fetch('/api/questions', {
        //         headers: {
        //             'Authorization': `Bearer ${accessToken}`
        //         }
        //     }).then(res => {
        //     if (!res.ok) {
        //         throw new Error(res.statusText);
        //     }
        //     return res.json();
        // }).then(questions => {
        //     console.log(questions)
        //     return this.setState({ questions })}
        // );
             this.props.dispatch(getLessons())
            this.props.dispatch(getScore())
    }

    render() {

        // const questions = this.props.questions
<<<<<<< HEAD
        console.log('questions',this.props.questions)
        console.log('score', this.props.score)
=======

>>>>>>> 9d0a9af141e31b14d118f0b38a8d9cc7a88ec511
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
<<<<<<< HEAD
                    <Link to='#'onClick={() =>{this.props.dispatch(updateScore(1000000))}}><p className='next-link'>next</p></Link> 
=======
                    <Link to='#'onClick={console.log(this)}><p>next</p></Link>
>>>>>>> 9d0a9af141e31b14d118f0b38a8d9cc7a88ec511
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
