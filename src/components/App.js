import React, {Component, Fragment} from 'react';
import '../sass/App.scss';
import {
    HashRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import Header from './Header';
import Info from './Info';
import FourEasySteps from './FourEasySteps';
import About from './About';
import FundationsList from './FundationsList';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Info/>
                <FourEasySteps/>
                <About/>
                <FundationsList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
