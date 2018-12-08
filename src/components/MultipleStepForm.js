import React from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import Summary from './Summary';
import Thanks from './Thanks';


class MultipleStepForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            things: [],
            bags: 0,
            location: '',
            whoToHelpTo: [],
            optionalOrganization: '',
            selectedOrganization: '',
            street: '',
            city: '',
            postCode: 0,
            phoneNumber: 0,
            date: 0,
            hour: 0,
            remarks: ''
        }
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    };
    handleThingsSelection = (thing) => {
        const things = this.state.things.slice();
        if (things.includes(thing)) {
            const index = things.indexOf(thing);
            things.splice(index, 1);
        } else {
            things.push(thing);
        }
        this.setState({
            things: things
        }, () => {
            console.log(this.state.things);
        })
    };

    render() {
        const {step, bugs} = this.state;
        switch (step) {
            case 1:
                return (
                    <FirstPage
                        nextStep={this.nextStep}
                        handleThingsSelection={this.handleThingsSelection}
                    />
                );
            case 2:
                return (
                    <SecondPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        value={bugs}
                    />
                );
            case 3:
                return (
                    <ThirdPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}/>
                );
            case 4:
                return (
                    <FourthPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );
            case 5:
                return (
                    <FifthPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );
            case 6:
                return(
                    <Summary
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );
            case 7:
                return(
                    <Thanks/>
                )
        }
    }
}

export default MultipleStepForm;