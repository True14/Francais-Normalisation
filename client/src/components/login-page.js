import React from 'react';
import '../css/login-page.css';
import LandingPageHeader from './landing-page-header';
import WhatItDoes from './what-it-does';
const LoginPage = (props) => {

        return (
            <div className='container-login'>
                 <LandingPageHeader />
                <div className='about-us'>
                  <WhatItDoes whatItDoes='Use spaced repetition to memorize French vocabulary' />
                  <WhatItDoes whatItDoes='Save your progress on the current quiz' />
                  <WhatItDoes whatItDoes='Other things!' />
                </div>
                <div className='login-box'>
                    <a href={'/api/auth/google'}><button>Signup/Login with Google</button></a>
                </div>
            </div>
        )
}


export default LoginPage
