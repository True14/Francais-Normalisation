import React from 'react';
import Logo from './logo';
// import './login-page.css';
// import './dashboard.css';
import { Link } from 'react-router-dom';


const DashBoard = (props) => {
        return (
            <section className='dashboard-container'>
              <Logo />
              <div className='question-container'>
                <p>Click 'Begin' to begin your french vocabulary quiz!</p>
                <Link to='/questions'><button className='begin'>Begin</button></Link>
              </div>
              <div className='logout-box'>
                <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
              </div>
            </section>
        )
}


export default DashBoard;
