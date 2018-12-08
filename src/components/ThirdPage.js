import React from 'react';
import ImportantInfo from './ImportantInfo';

class ThirdPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądż celu ich pomocy.',
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
        return (
            <React.Fragment>
                <ImportantInfo text={this.state.info}/>
                <section className='thirdPage'>
                    <div className='thirdPage-steps'>Krok 3/4</div>
                    <div className='thirdPage-buttons'>
                        <button onClick={this.back}>Wstecz</button>
                        <button onClick={this.continue}>Szukaj</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ThirdPage;