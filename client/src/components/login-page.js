import React from 'react';
// import './login-page.css';
import Logo from './logo';
export default class LoginPage extends React.Component {
    render() {

        return (
            <div className='container-login'>
                 <Logo />
                <div className='about-us'>
                    <h2>About Us...</h2>
                    <p>Learn a language with us</p>
                </div>
                <div className='login-box'>
                    <a href={'/api/auth/google'}><button>Login with Google</button></a>
                </div>
            </div>
        )
}
    }
