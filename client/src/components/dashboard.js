import React from 'react';
import DashHeader from './dash-header'
import { Link } from 'react-router-dom';

import '../css/dashboard.css';

function DashBoard(props) {
  return (
    <section className="dashboard-container">
      <DashHeader />
      <div className="question-container">
        <p>Are you ready to begin your quiz?</p>
        <Link to="/questions">
          <button className="begin">Begin</button>
        </Link>
      </div>
    </section>
  )
}

export default DashBoard;
