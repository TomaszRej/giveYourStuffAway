import React from 'react';
import ImportantInfo from './ImportantInfo';

class FirstPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: 'Uzupełnij szczeguły Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
            thingsToGive: {
                'ubrania, które nadają się do ponownego użycia': false,
                'ubrania, do wyrzucenia': false,
                'zabawki': false,
                'książki': false,
                'inne': false

            }
        }

    }

    continue = (e) => {
        e.preventDefault();
        const {nextStep} = this.props;
        if (typeof nextStep === 'function') {
            nextStep();
        }
    };
    handleChange = (e) => {
        // filling things array in parent state
        const checkedBox = e.target.parentElement.innerText;
        const {handleThingsSelection} = this.props;
        if (typeof handleThingsSelection === 'function') {
            handleThingsSelection(checkedBox);
        }

        //update local state
        const val = e.target.checked;
        const name = e.target.name;
        let updateThingsToGive = Object.assign({}, this.state.thingsToGive, {[name]: val});

        this.setState({
            thingsToGive: updateThingsToGive
        }, () => {
            console.log(this.state.thingsToGive, 'ze state')
        })

    };

    renderCheckboxes = () => {
        const thingsToGive = ['ubrania, które nadają się do ponownego użycia', 'ubrania, do wyrzucenia', 'książki', 'zabawki', 'inne'];
        return thingsToGive.map((thing, i) => {
            return (
                <label>
                    <input type='checkbox' onChange={this.handleChange} name={thing}
                           value={this.state.thingsToGive[thing]}/>
                    {thing}
                </label>
            )
        })

    };

    render() {
        return (
            <React.Fragment>
                <ImportantInfo text={this.state.info}/>
                <section className='firstPage'>

                    <div className='firstPage-steps'>Krok 1/4</div>
                    <h3>Zaznacz co chcesz oddac:</h3>
                    <div className='firstPage-inputs'>
                        {/*<label>*/}
                        {/*<input type='checkbox' onChange={this.handleChange}/>*/}
                        {/*ubrania, które nadają się do ponownego użycia*/}
                        {/*</label>*/}
                        {/*<label>*/}
                        {/*<input type='checkbox' onChange={this.handleChange}/>*/}
                        {/*ubrania, do wyrzucenia*/}
                        {/*</label>*/}
                        {/*<label>*/}
                        {/*<input type='checkbox' onChange={this.handleChange}/>*/}
                        {/*zabawki*/}
                        {/*</label>*/}
                        {/*<label>*/}
                        {/*<input type='checkbox' onChange={this.handleChange}/>*/}
                        {/*książki*/}
                        {/*</label>*/}
                        {/*<label>*/}
                        {/*<input type='checkbox' onChange={this.handleChange}/>*/}
                        {/*inne*/}
                        {/*</label>*/}
                        {this.renderCheckboxes()}
                    </div>
                    <button onClick={this.continue}>Dalej</button>
                </section>
            </React.Fragment>
        )
            ;
    }

}

export default FirstPage;
