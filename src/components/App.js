import React, {Component, Fragment} from 'react';
import '../sass/App.scss';
import {
    HashRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
// import db from '../db.json'
// import Header from './Header';
// import Info from './Info';
// import FourEasySteps from './FourEasySteps';
// import About from './About';
// import FundationsList from './FundationsList';
// import Footer from './Footer';

import NotLoggedUserView from './NotLoggedUserView';
import LoggedUserView from './LoggedUserView';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            globalUserName: "Gl User"
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <HashRouter>
                <Fragment>
                    <Switch>
                        <Route exact path='/' component={NotLoggedUserView}/>

                        <Route exact path='/logged'
                               render={(props) => <LoggedUserView  {...props} globalUserName={this.state.globalUserName}/>}/>
                    </Switch>
                </Fragment>
            </HashRouter>
        );
    }
}

export default App;
