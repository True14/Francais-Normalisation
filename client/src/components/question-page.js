import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
import Logo from './logo';
import {Link} from 'react-router-dom'
import questionpage from './question-page.css'

class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        fetch('/api/questions', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(questions => {
            console.log(questions)
            return this.setState({ questions })}
        );
    }

    render() {
        // const questions = this.props.questions
        
        // this.state.questions.map((question, index) =>
        //     <li key={index}>{question}</li>
        // );

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
                    <Link to='#'onClick={console.log(this)}><p className='next-link'>next</p></Link> 
                </div>
                
            </div>
        );
    }
}
const mapPropsToState = (state,props) => {
    return {
        questions: state.questions
    }
}

// export default QuestionPage;
export default connect(mapPropsToState)(QuestionPage)