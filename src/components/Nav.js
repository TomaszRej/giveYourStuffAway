import React from 'react';
import {HashLink} from "react-router-hash-link";

class Nav extends React.Component{
    render() {
        const {isMenuVisible, isMobileView, transform} = this.props;
        const hamburgerIcon = isMenuVisible ? <i onClick={this.handleHamburgerClick} className="fas fa-times"/> :
            <i onClick={this.handleHamburgerClick} className="fas fa-bars"/>;
        return (
            <nav>
                proba
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

            </nav>
        );
    }
}

export default Nav;