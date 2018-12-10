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
            transform: 0,
            data: null
        }

    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        //passing to state imported db.json
        this.setState({
            data: db
        })
    }



    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () =>{
        const transform = window.scrollY;
        //const transform = window.pageYOffset;


        this.setState({
            transform: transform
        });
    };

    render() {

        return (
            <div>
                <Header transform={this.state.transform}/>
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