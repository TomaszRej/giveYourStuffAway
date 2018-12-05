import React from 'react';

const FourEasySteps = () => {
    return (
        <section id='fourEasySteps-section'>
            <header>Wystarczą 4 proste kroki</header>
            <div className='fourEasySteps-decoration'/>
            <div className='steps'>
                <div className='step'>
                    <i className="fas fa-hand-holding-heart"/>
                    <h5>Wybierz rzeczy</h5>
                    <div className='line'>_______________</div>
                    <p>ubrania, zabawki, sprzęt i innne</p>
                </div>
                <div className='step'>
                    <i className="fas fa-arrow-down"/>
                    <h5>Spakuj je</h5>
                    <div className='line'>_______________</div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className='step'>
                    <i className="fas fa-binoculars"/>
                    <div className='groupUnderBinoculars'>
                    <h5>Zdecyduj komu chcesz pomóc</h5>
                    <div className='line'>_______________</div>
                    <p>wybierz zaufane miejsce</p>
                    </div>
                </div>
                <div className='step'>
                    <i className="fas fa-sync-alt"/>
                    <h5>Zamów kuriera</h5>
                    <div className='line'>_______________</div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>


            </div>
            <button>Załóż konto</button>
        </section>
    );
};
export default FourEasySteps;