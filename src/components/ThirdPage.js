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
        const {location, whoToHelpTo, optionalOrganization} = this.props;
        return (
            <React.Fragment>
                <ImportantInfo text={this.state.info}/>
                <div className='picture-container'>
                    <section className='thirdPage'>
                        <div className='thirdPage-steps'>Krok 3/4</div>
                        <label> Lokalizacja:
                            <select className='location-input' name='location' value={location}
                                    onChange={this.handleChange}>
                                <option>-wybierz-</option>
                                <option value="Częstochowa">Częstochowa</option>
                                <option value="Katowice">Katowice</option>
                                <option value="Kraków">Kraków</option>
                                <option value="Warszawa">Warszawa</option>
                                <option value="Wrocław">Wrocław</option>
                                <option value="Zakopane">Zakopane</option>
                            </select>
                        </label>
                        <div>
                            <div>
                                Komu chcesz pomóc?
                            </div>
                            <ul>
                                <li>dzieciom</li>
                                <li>samotnym matkom</li>
                                <li>bezdomnym</li>
                                <li>niepełnosprawnym</li>
                                <li>osobom starszym</li>
                            </ul>
                        </div>
                        <div className='optionalOrganizationName'>
                            <div>Wpisz nazwę konkretnej organizacji (opcjonalnie)</div>
                            <input type='text'/>
                        </div>

                            <div className='thirdPage-buttons'>
                                <button onClick={this.back}>Wstecz</button>
                                <button onClick={this.continue}>Szukaj</button>
                            </div>
                    </section>
                </div>
            </React.Fragment>
    )
    }
    }

    export default ThirdPage;