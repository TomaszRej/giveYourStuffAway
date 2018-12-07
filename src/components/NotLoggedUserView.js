import React, {Component, Fragment} from 'react';
import '../sass/App.scss';
import {
    HashRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import db from '../db.json'
import Header from './Header';
import Info from './Info';
import FourEasySteps from './FourEasySteps';
import About from './About';
import FundationsList from './FundationsList';
import Footer from './Footer';



class NotLoggedUserView extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: null
        }

    }
    componentDidMount(){
        //passing to state imported db.json
        this.setState({
            data: db
        })
    }
    render() {
        return (
            <div>
                <Header/>
                <Info/>
                <FourEasySteps/>
                <About/>
                <FundationsList data={this.state.data}/>
                <Footer/>
            </div>
        );
    }
}

export default NotLoggedUserView;