import React from 'react';
import loginpage from './login-page.css';

export default class LoginPage extends React.Component {
    render() {

        return (
            <div className='container-login'>
                <div className='login-box'> 
                    <a href={'/api/auth/google'}><button>Login with Google</button></a>
                </div>

                <div id='logo' className='logo-box'>
                    <h1>Learnlingo</h1>
                </div>

                <div className='about-us'>
                    <h2>About Us...</h2>
                    <p>Learn a language with us</p>
                </div>
            </div>
        )
}
    }
    
