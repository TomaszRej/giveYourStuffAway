import React from 'react';
import ImportantInfo from "./ImportantInfo";

class FourthPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            info: 'testtttta.',

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
                <section className='summary'>
                    <h3>Podsumowanie Twojej darowizny</h3>
                    <div className='summary-buttons'>
                        <button onClick={this.back}>Wstecz</button>
                        <button onClick={this.continue}>Potwierdzam</button>
                    </div>
                </section>
        );
    }
}
export default FourthPage;