import React from 'react';
import ImportantInfo from './ImportantInfo';

class SecondPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: 'Wszystkie rzeczy do oddania zapakuj w 60l worki.'
        }

    }

    continue = (e) => {
        e.preventDefault();
        const {nextStep} = this.props;
        if (typeof nextStep === 'function') {
            nextStep();
        }
    };
    back = (e) => {
        e.preventDefault();
        const {prevStep} = this.props;
        if (typeof prevStep === 'function') {
            prevStep();
        }
    };

    render() {
        const {bugs} = this.props;
        return (
            <React.Fragment>
                <ImportantInfo text={this.state.info}/>
                <section className='bugs'>

                    <div className='bugs-steps'>Krok 2/4</div>
                    <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                    <div className='bugs-input'></div>
                    <div className='bugs-buttons'>
                        <button onClick={this.back}>Wstecz</button>
                        <button onClick={this.continue}>Dalej</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default SecondPage;