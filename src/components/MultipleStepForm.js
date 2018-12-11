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
            bags: '',
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
    handleChange = (name, e) => {
        // console.log(name,e.target.value);
        // console.log('gora input i e');
        this.setState({
            [name]: e.target.value
        },()=>{
            console.log(this.state.bags,'ze state');
        })
    };
    handleThingsSelection = (thing) => {
        //const things = this.state.things.slice();
        const newThings = [];
        for(const el in thing){
            console.log(el,'element');
            if(thing[el] === true) {
                newThings.push(el);
            }
        }


        // console.log('przed ifem',thing);
        // console.log(things.includes(thing),'czy zawiera');
        //
        // // usuwa co drugi raz cos ze state sie chrzani ??????????????
        //
        //
        // if (things.includes(thing)) {
        //     const index = things.indexOf(thing);
        //     const deleted = things.splice(index, 1);
        //     // things.filter((el) =>{ el !== thing})
        // } else {
        //     things.push(thing);
        // }

        this.setState({
            things: newThings
        }, () => {
            console.log(this.state.things,'ze state things[]!!!!!');
        })
    };

    render() {
        const {step, bags, location, whoToHelpTo, optionalOrganization} = this.state;
        const valuesForThirdPage = { location, whoToHelpTo, optionalOrganization };
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
                        value={bags}
                    />
                );
            case 3:
                return (
                    <ThirdPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={valuesForThirdPage}
                    />
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