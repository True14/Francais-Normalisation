import React from 'react';
import DashHeader from './dash-header'
import { Link } from 'react-router-dom';

import '../css/dashboard.css';

function DashBoard(props) {
  return (
    <section className="dashboard-container">
      <DashHeader />
      <div className="question-container">
        <h2>Instructions:</h2>
        <p className="instructions">On the next page, you{`'`}ll be presented
            with multiple examples of French vocabulary.
            Make your best guess in the answer box.
            Get each word correct 3 times in a row and you will complete the quiz!
        </p>
        <p>Are you ready to begin your quiz?</p>
        <Link to="/questions">
          <button className="begin">Begin</button>
        </Link>
      </div>
    </section>
  )
}

export default DashBoard;
