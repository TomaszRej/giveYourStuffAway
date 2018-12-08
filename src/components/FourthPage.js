import React from 'react';
import ImportantInfo from "./ImportantInfo";

class FourthPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            info: 'Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której trafi Twoja przesyłka.',

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
                <section className='fourthPage'>
                    <div className='fourthPage-steps'>Krok 3/4</div>
                    <div className='fourthPage-buttons'>
                        <button onClick={this.back}>Wstecz</button>
                        <button onClick={this.continue}>Dalej</button>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default FourthPage;