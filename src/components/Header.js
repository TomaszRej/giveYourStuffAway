import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isMobileView: '',
            isMenuVisible: ''

        }
    }

    componentDidMount(){
      console.log('komponenet');
        const mobile = window.matchMedia("screen and (max-width: 400px)");
        if (mobile.matches) {
            this.setState({
                isMobileView: true,
                isMenuVisible: false
            })
        } else  {
            this.setState({
                isMobileView: false,
                isMenuVisible: true

            })
        }
        mobile.addListener( (mobile) => {
            if (mobile.matches) {
console.log('mobile');
                this.setState({
                    isMobileView: true,
                    isMenuVisible: false
                })
            } else  {
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


        const hamburgerIcon = isMenuVisible ? <i onClick={this.handleHamburgerClick} className="fas fa-times"/> :  <i onClick={this.handleHamburgerClick} className="fas fa-bars"/>;
        return (
            <section id='header-section'>
                <header>
                    <div className='login-section'>
                        <span>Zaloguj</span>
                        <span>Załóż konto</span>
                    </div>
                    <nav>
                        <div style={{display: isMobileView ? 'flex' : 'none'}} className='mobileMenu'><i className="fas fa-tshirt"/> {hamburgerIcon}
                        </div>
                        <ul style={{display: isMenuVisible ? 'block' : 'none'}} className={isMenuVisible ? 'openMenu':'closeMenu'}>
                            <li><HashLink to='#header-section'>Start</HashLink></li>
                            <li><HashLink to='#fourEasySteps-section'>O co chodzi?</HashLink></li>
                            <li><HashLink to='#about-section'>O nas</HashLink></li>
                            <li><HashLink to='#foundationsList-section'>Fundacje i organizacje</HashLink></li>
                            <li><HashLink to='#footer-section'>Kontakt</HashLink></li>
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
                        <Link to={'logged'}> <button><span>Oddaj</span> <span>rzeczy</span></button></Link>
                        <button><span>Zorganizuj</span> <span>zbiórkę</span>
                        </button>
                    </div>
                </div>



            </section>);
    }
};

export default Header;