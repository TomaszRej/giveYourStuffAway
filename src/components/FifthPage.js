import React from 'react';
import ImportantInfo from "./ImportantInfo";

class FifthPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            info: 'Podaj adres oraz termin odbioru rzeczy.'
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
                <section className='fifthPage'>
                    <div className='fifthPage-steps'>Krok 4/4</div>
                    <div className='fifthPage-buttons'>
                        <button onClick={this.back}>Wstecz</button>
                        <button onClick={this.continue}>Dalej</button>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default FifthPage;