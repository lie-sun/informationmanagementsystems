import React, {Component} from 'react';
import './App.less';
import '../../assets/global.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from 'components/common/Header/Header'
import Login from 'components/common/Login/Login';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path='/' exact component={Header}/>
                    <Route path='/login' component={Login}/>
                </div>
            </Router>
        );
    }
}

export default App;
