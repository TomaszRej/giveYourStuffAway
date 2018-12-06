import React from 'react';

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
        console.log(this.state.isMobileView);

        const hamburgerIcon = this.state.isMenuVisible ? <i onClick={this.handleHamburgerClick} className="fas fa-times"/> :  <i onClick={this.handleHamburgerClick} className="fas fa-bars"/>;
        return (
            <section id='header-section'>
                <div style={{display: this.state.isMobileView ? 'none': 'block'}}>TEST</div>
                <header>
                    <div className='login-section'>
                        <span>Zaloguj</span>
                        <span>Załóż konto</span>
                    </div>
                    <nav>
                        <div style={{display: this.state.isMobileView ? 'flex' : 'none'}} className='mobileMenu'><i className="fas fa-tshirt"/> {hamburgerIcon}
                        </div>
                        <ul style={{display: this.state.isMenuVisible ? 'block' : 'none'}} className={this.state.isMenuVisible ? 'openMenu':'closeMenu'}>
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
                        <button><span>Oddaj</span> <span>rzeczy</span></button>
                        <button><span>Zorganizuj</span> <span>zbiórkę</span>
                        </button>
                    </div>
                </div>



            </section>);
    }
};

export default Header;