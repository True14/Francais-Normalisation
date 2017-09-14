import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuestionPage from './question-page';
import LoginPage from './login-page';
import DashBoard from './dashboard';
import { getCurrentUser } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCurrentUser());
  }

  render() {
    if (!this.props.currentUser) {
      return <LoginPage />;
    }
    return (
      <Router>
      <div className="app">
        <main>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/questions" component={QuestionPage} />
        </main>
      </div>
      </Router>
    )
  }
}

const mapPropsToState = state => ({
  currentUser: state.currentUser
})
export default connect(mapPropsToState)(App);
