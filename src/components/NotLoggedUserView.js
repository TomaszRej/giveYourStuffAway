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
import { connect } from 'react-redux';



class NotLoggedUserView extends Component {
    constructor(props){
        super(props);

        this.state = {
            transform: 0,
        }

    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }



    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () =>{
        const transform = window.scrollY;

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
                <FundationsList data={this.props.data}/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

export default connect(mapStateToProps)(NotLoggedUserView);