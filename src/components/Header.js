import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            elementClicked: '1',
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
    handleClickOnList = (e) =>{
        const clicked = e.currentTarget.dataset.id;
        this.setState({
            elementClicked: clicked,
        },()=>{console.log(this.state.elementClicked)})
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
                            <li data-id="1" className={this.state.elementClicked == 1 ? 'active' : null}
                                onClick={this.handleClickOnList}><HashLink to='#header-section'>Start</HashLink></li>
                            <li data-id="2" className={this.state.elementClicked == 2 ? 'active' : null}
                                onClick={this.handleClickOnList}><HashLink to='#fourEasySteps-section'>O co chodzi?</HashLink></li>
                            <li data-id="3" className={this.state.elementClicked == 3 ? 'active' : null}
                                onClick={this.handleClickOnList}><HashLink to='#about-section'>O nas</HashLink></li>
                            <li data-id="4" className={this.state.elementClicked == 4 ? 'active' : null}
                                onClick={this.handleClickOnList}><HashLink to='#foundationsList-section'>Fundacje i organizacje</HashLink></li>
                            <li data-id="5" className={this.state.elementClicked == 5 ? 'active' : null}
                                onClick={this.handleClickOnList}><HashLink to='#footer-section'>Kontakt</HashLink></li>
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