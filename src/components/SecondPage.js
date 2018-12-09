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
    handleChange = (e) => {
        const {handleChange} = this.props;
        if (typeof handleChange === 'function') {
            handleChange(e.target.name, e);
        }

    };

    render() {
        const {bags} = this.props;
        return (
            <React.Fragment>
                <ImportantInfo text={this.state.info}/>
                <div className='picture-container'>
                    <section className='bags'>
                        <div className='bags-steps'>Krok 2/4</div>
                        <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                        <label> Liczba 60 l worków:
                        <select className='bags-input' name='bags' value={bags} onChange={this.handleChange}>
                            <option defaultValue={bags}>-wybierz-</option>
                            <option value="1-4">1-4</option>
                            <option value="5-10">5-10</option>
                            <option value="więcej niż 10">więcej niż 10</option>
                        </select>
                        </label>

                        <div className='bags-buttons'>
                            <button onClick={this.back}>Wstecz</button>
                            <button onClick={this.continue}>Dalej</button>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default SecondPage;