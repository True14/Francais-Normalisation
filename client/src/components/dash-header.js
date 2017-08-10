import React from 'react';
import {connect} from 'react-redux';
import '../css/dash-header.css';

class DashHeader extends React.Component  {
  render() {
    return (
      <div className='dash-header'>
        <h1>{this.props.currentUserName}</h1>
        <div className='logout-box'>
          <a href={'/api/auth/logout'}><button className='logout-button'>Logout</button></a>
        </div>
      </div>
    )
  }
}

const mapPropsToState = (state,props) => {
    return {
        currentUserName: state.currentUser.name
    }
}
export default connect(mapPropsToState)(DashHeader);
