import React from 'react';

import '../css/what-it-does.css';

function WhatItDoes(props) {
  return (
    <div className="what-it-does">
      <p>{props.whatItDoes}</p>
    </div>
  )
}

export default WhatItDoes;
