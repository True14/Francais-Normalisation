import React from 'react';
import { connect } from 'react-redux';
import { save, reset } from '../actions';
import DashHeader from './dash-header';

import '../css/congratulations.css';

class Congratulations extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(save(this.props.currentUser.id, undefined, undefined));
  }

  onClick = e => {
    this.props.dispatch(reset());
  }

  render = () => {
    return (
      <div className="congratulations">
        <DashHeader />
        <section className="reset-div">
          <h1>Congratulations! You have completed the quiz!</h1>
          <button className="reset" type="submit" onClick={this.onClick}>Reset</button>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});
export default connect(mapStateToProps)(Congratulations)
