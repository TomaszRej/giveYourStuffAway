import React, {Fragment} from 'react';
import MultiStepForm from './MultipleStepForm';
import Footer from './Footer';
import {Link} from "react-router-dom";

class LoggedUserView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transform: 0,
            isMobileView: '',
            isMenuVisible: '',
            isPreferencesOpen: false,

        }
    }

    componentDidMount() {
        console.log('komponenet');
        window.addEventListener('scroll', this.handleScroll);
        const mobile = window.matchMedia("screen and (max-width: 400px)");
        if (mobile.matches) {
            this.setState({
                isMobileView: true,
                isMenuVisible: false
            })
        } else {
            this.setState({
                isMobileView: false,
                isMenuVisible: true

            })
        }
        mobile.addListener((mobile) => {
            if (mobile.matches) {
                console.log('mobile');
                this.setState({
                    isMobileView: true,
                    isMenuVisible: false
                })
            } else {
                this.setState({
                    isMobileView: false,
                    isMenuVisible: true
                })
            }
        });
    };
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () =>{
        const transform = window.scrollY;

        this.setState({
            transform: transform
        });
    };

    handleHamburgerClick = () => {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    };
    handleGearClick = () => {
        this.setState({
            isPreferencesOpen: !this.state.isPreferencesOpen
        })
    };


    render() {
        const {isMobileView, isMenuVisible, isPreferencesOpen, transform} = this.state;
        const {globalUserName} = this.props;


        const hamburgerIcon = isMenuVisible ? <i onClick={this.handleHamburgerClick} className="fas fa-times"/> :
            <i onClick={this.handleHamburgerClick} className="fas fa-bars"/>;
        return (

            <section id='headerLogged-section'>
                <header id='header' style={transform >= 100 ? navStyle : null}>
                    <div className='login-section'>
                        <span className='greeting'>Witaj {globalUserName}</span>
                        <i onClick={this.handleGearClick} style={{opacity: isPreferencesOpen ? '1' : '0.7'}}
                           className="fas fa-cogs">
                            <ul style={{display: isPreferencesOpen ? 'block' : 'none'}} className='preferences'>
                                <li>Profil</li>
                                <li>Ustawienia</li>
                                <li>Moje zbiórki</li>
                                <li><Link to={'/'}>Wyloguj</Link></li>
                            </ul>
                        </i>
                    </div>
                    <nav>
                        <div style={{display: isMobileView ? 'flex' : 'none'}} className='mobileMenu'><i
                            className="fas fa-tshirt"/> {hamburgerIcon}
                        </div>
                        <ul style={{display: isMenuVisible ? 'block' : 'none'}}
                            className={isMenuVisible ? 'openMenu' : 'closeMenu'}>
                            <li><a href='#header-section'>Start</a></li>
                            <li><a href='#fourEasySteps-section'>O co chodzi?</a></li>
                            <li><a href='#about-section'>O nas</a></li>
                            <li><a href='#fundationsList-section'>Fundacje i organizacje</a></li>
                            <li><a href='#footer-section'>Kontakt</a></li>
                        </ul>

                    </nav>
                </header>
                <div className='mainIdea'>
                    <h1>
                        <span>Oddaj rzeczy, których już nie chcesz</span>
                        <span>POTRZEBUJĄCYM</span>
                    </h1>
                    <div className='header-decoration'/>
                    <h3>Wystarczą 4 proste kroki</h3>
                    <div className='steps'>
                        <div className='step'>
                            <div className='step-number'>1</div>
                            <div className='step-text'><span>Wybierz </span><span>rzeczy</span></div>
                        </div>
                        <div className='step'>
                            <div className='step-number'>2</div>
                            <div className='step-text'><span>Spakuj je</span><span>w worki</span></div>
                        </div>
                        <div className='step'>
                            <div className='step-number'>3</div>
                            <div className='step-text'><span>Wybierz </span><span>fundację</span></div>
                        </div>
                        <div className='step'>
                            <div className='step-number'>4</div>
                            <div className='step-text'><span>Zamów</span><span>kuriera</span></div>
                        </div>
                    </div>
                </div>
                <MultiStepForm/>
                <Footer/>
            </section>);
    }

}
const navStyle = {
    boxShadow: '0 0 1.5rem rgba(0,0,0,.2)',
    position: 'fixed',
    top: 0,
    backgroundColor: 'white',
    zIndex: 1,
    width: '100%'
};

export default LoggedUserView;