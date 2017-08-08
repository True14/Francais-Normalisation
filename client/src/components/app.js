import React from 'react';
import * as Cookies from 'js-cookie';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import QuestionPage from './question-page';
import LoginPage from './login-page';
import DashBoard from './dashboard';
import LogOut from './logout';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        // Job 4: Redux-ify all of the state and fetch calls to async actions.
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            fetch('/api/me', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
                if (!res.ok) {
                    if (res.status === 401) {
                        // Unauthorized, clear the cookie and go to
                        // the login page
                        Cookies.remove('accessToken');
                        return;
                    }
                    throw new Error(res.statusText);
                }
                return res.json();
            }).then(currentUser => {
                // console.log(currentUser)
                return this.setState({currentUser})}
            );
        }
    }

    render() {
        if (!this.state.currentUser) {
            return <LoginPage />;
        }
        // console.log(this.state.currentUser)
        return (
            <Router>
                <div className='app'>
                    <main>
                        <Route  exact path='/' component={DashBoard}  />
                        <Route  exact path='/questions' component={QuestionPage}/>  
                        {/* <Route  exact path='/logout' component={LogOut}/> */}
                    </main> 
                </div>
            </Router>
        )
    }
}

export default App;
