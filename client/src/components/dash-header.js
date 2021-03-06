import React from 'react';
import {connect} from 'react-redux';
import {save} from '../actions';
import '../css/dash-header.css';

class DashHeader extends React.Component  {

  onClick = e => {
    if (this.props.questionQueue.first) {
      this.props.dispatch(save(this.props.currentUser.id, this.props.currentQuestion, this.props.questionQueue));
    }
  }

  render() {
    return (
      <div className="dash-header">
        <h1>{this.props.currentUser.name}</h1>
        <div className="logout-box">
          <a href="/api/auth/logout"><button className="logout-button" onClick={this.onClick}>Logout</button></a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentQuestion: state.currentQuestion,
  questionQueue: state.questionQueue
});

export default connect(mapStateToProps)(DashHeader);
