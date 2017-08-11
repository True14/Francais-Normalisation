import React from 'react';
import { connect } from 'react-redux';
import {save, reset} from '../actions';
import DashHeader from './dash-header';
import '../css/congratulations.css';

class Congratulations extends React.Component {

  _onClick = e => {
    this.props.dispatch(save(this.props.currentUser.id, undefined, undefined));
    this.props.dispatch(reset())
  }

  render = () => {
    return (
      <div className='congratulations'>
        <DashHeader />
        <section className='reset-div'>
          <h1>Congratulations! You have completed the quiz!</h1>
          <button className='reset' type='submit' onClick={this._onClick}>Reset</button>
        </section>
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapPropsToState)(Congratulations)
