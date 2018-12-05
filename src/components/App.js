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
            <HashRouter>
                <div>
                    <nav>
                        <ul className='nav'>
                            // sprubowac ostylowac NAvLink nie po klasie a sam tag a ???
                            <li className='nav-link'><NavLink className='nav-link-a' activeClassName='activeNavLink' exact
                                                              to='/'>Start </NavLink></li>
                            <li className='nav-link'><NavLink className='nav-link-a'
                                                                            activeClassName='activeNavLink' exact
                                                                            to='/ulubione'>Ulubione</NavLink></li>
                        </ul>
                    </nav>
                    <Info/>
                    <FourEasySteps/>
                    <About/>
                    <FundationsList/>
                    <Footer/>
                    <Switch>
                        <Route exact path='/ulubione'
                               render={(props) => <Header {...props}/>}
                        />
                        {/*<Route exact path='/' component={Home}/>*/}


                    </Switch>

                </div>
            </HashRouter>
        );
    }
}

export default App;
