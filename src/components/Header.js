import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {connect} from 'react-redux';
import Nav from './Nav';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobileView: '',
            isMenuVisible: ''
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

    render() {
        const {isMobileView, isMenuVisible} = this.state;
        const {transform} = this.props;
        const navStyle = {
            boxShadow: '0 0 1.5rem rgba(0,0,0,.2)',
            position: 'fixed',
            top: 0,
            backgroundColor: 'white',
            zIndex: 1,
            width: '100%'
        };
        console.log(transform, 'transform w header !!');


        // const hamburgerIcon = isMenuVisible ? <i onClick={this.handleHamburgerClick} className="fas fa-times"/> :
        //     <i onClick={this.handleHamburgerClick} className="fas fa-bars"/>;

        let link;
        if (this.props.globalUserName) {
            link = <Link to={'logged'}>
                <button><span>Oddaj</span> <span>rzeczy</span></button>
            </Link>;
        } else {
            link = <Link to={'login'}>
                <button><span>Oddaj</span> <span>rzeczy</span></button>
            </Link>;

        }
        return (
            <section id='header-section'>
                <header style={transform >= 100 ? navStyle : null}>
                    <div className='login-section'>
                        <span><Link to={'login'}>Zaloguj</Link></span>
                        <span>Załóż konto</span>
                    </div>
                    <Nav isMobileView={isMobileView}
                         isMenuVisible={isMenuVisible}
                         transform={transform}
                    />
                    {/*<nav>*/}
                        {/*<div style={{display: isMobileView ? 'flex' : 'none'}} className='mobileMenu'><i*/}
                            {/*className="fas fa-tshirt"/> {hamburgerIcon}*/}
                        {/*</div>*/}
                        {/*<ul style={{display: isMenuVisible ? 'block' : 'none'}}*/}
                            {/*className={isMenuVisible ? 'openMenu' : 'closeMenu'}>*/}
                            {/*<li data-id="1" className={transform < 620 ? 'active' : null}*/}
                            {/*><HashLink to='#header-section'>Start</HashLink></li>*/}
                            {/*<li data-id="2"*/}
                                {/*className={transform >= 620 && transform < 1320 ? 'active' : null}>*/}
                                {/*<HashLink to='#fourEasySteps-section'>O co chodzi?</HashLink>*/}
                            {/*</li>*/}
                            {/*<li data-id="3"*/}
                                {/*className={transform >= 1320 && transform < 2378 ? 'active' : null}*/}
                            {/*><HashLink to='#about-section'>O nas</HashLink></li>*/}
                            {/*<li data-id="4"*/}
                                {/*className={transform >= 2378 && transform < 2900 ? 'active' : null}*/}
                            {/*><HashLink to='#foundationsList-section'>Fundacje i organizacje</HashLink></li>*/}
                            {/*<li data-id="5" className={transform > 2900 ? 'active' : null}*/}
                            {/*><HashLink to='#footer-section'>Kontakt</HashLink></li>*/}
                        {/*</ul>*/}

                    {/*</nav>*/}
                </header>
                <div className='mainIdea'>
                    <h1>
                        <span>Zacznij pomagać!</span>
                        <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    </h1>
                    <div className='header-decoration'/>
                    <div className='mainButtons'>
                        {/*<button><span>Oddaj</span> <span>rzeczy</span></button>*/}
                        {link}
                        <button><span>Zorganizuj</span> <span>zbiórkę</span>
                        </button>
                    </div>
                </div>
            </section>);
    }
};

const mapStateToProps = state => {
    return {
        globalUserName: state.globalName
    }
};



export default connect(mapStateToProps)(Header);