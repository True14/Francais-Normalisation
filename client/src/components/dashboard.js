import React from 'react';
import Logo from './logo';
// import './login-page.css';
// import './dashboard.css';
import { Link } from 'react-router-dom';


class DashBoard extends React.Component {
    render() {
        return (
            <div className='dashboard-container'>
              <Logo />
              <div className='question-container'>
                <p>ready to begin learning francais?</p>
                <Link to='/questions'><p>next</p></Link>
              </div>
              <div className='logout-box'>
                <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
              </div>
            </div>
        )
    }
}


export default DashBoard;
