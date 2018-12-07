import React, {Fragment} from 'react';
import Footer from './Footer';
import {Link} from "react-router-dom";

class LoggedUserView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobileView: '',
            isMenuVisible: '',
            isPreferencesOpen: false,

        }
    }

    componentDidMount() {
        console.log('komponenet');
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
        const {isMobileView, isMenuVisible, isPreferencesOpen} = this.state;
        const {globalUserName} = this.props;

        const hamburgerIcon = isMenuVisible ? <i onClick={this.handleHamburgerClick} className="fas fa-times"/> :
            <i onClick={this.handleHamburgerClick} className="fas fa-bars"/>;
        return (

            <section id='header-section'>
                <header>
                    <div className='login-section'>
                        <span className='greeting'>Witaj {globalUserName}</span>
                        <i onClick={this.handleGearClick} style={{opacity:isPreferencesOpen? '1' : '0.7'}} className="fas fa-cogs">
                            <ul style={{display: isPreferencesOpen ? 'block': 'none' }}  className='preferences'>
                                <li>Profil</li>
                                <li>Ustawienia</li>
                                <li>Moje zbiórki</li>
                                <li>Wyloguj</li>
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
                        <span>Zacznij pomagać!</span>
                        <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    </h1>
                    <div className='header-decoration'/>
                    <div className='mainButtons'>
                        {/*<button><span>Oddaj</span> <span>rzeczy</span></button>*/}
                        <Link to={'logged'}>
                            <button><span>Oddaj</span> <span>rzeczy</span></button>
                        </Link>
                        <button><span>Zorganizuj</span> <span>zbiórkę</span>
                        </button>
                    </div>
                </div>


                <Footer/>
            </section>);
    }

};

export default LoggedUserView;