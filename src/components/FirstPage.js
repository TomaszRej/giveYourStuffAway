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
        //update local state
        const val = e.target.checked;
        const name = e.target.name;
        let updateThingsToGive = Object.assign({}, this.state.thingsToGive, {[name]: val});


        const checkedBox = e.target.parentElement.innerText;
        console.log(checkedBox, 'przed if powiino byc to samo ');

        const {handleThingsSelection} = this.props;
        this.setState({
            thingsToGive: updateThingsToGive
        },()=>{
            // filling things array in parent state

            if (typeof handleThingsSelection === 'function') {
                handleThingsSelection(this.state.thingsToGive);
            }
        });




    };

    renderCheckboxes = () => {
        const thingsToGive = ['ubrania, które nadają się do ponownego użycia', 'ubrania, do wyrzucenia', 'książki', 'zabawki', 'inne'];

        return thingsToGive.map((thing, i) => {
            return (
                <label key={i} className='labelForCheckbox'>
                    <input type='checkbox' onChange={this.handleChange} name={thing}
                           value={this.state.thingsToGive[thing]}/>
                    <span className='checkmark'>
                        <i style={{display: this.state.thingsToGive[thing] === true ? 'block' : 'none'}}
                           className="fas fa-check"/>
                    </span>
                    {thing}
                </label>
            )
        })

    };

    render() {
        return (
            <React.Fragment>
                <ImportantInfo text={this.state.info}/>
                <div className='picture-container'>
                <section className='firstPage'>
                        <div className='firstPage-steps'>Krok 1/4</div>
                        <h3>Zaznacz co chcesz oddać:</h3>
                        <div className='firstPage-inputs'>
                            {this.renderCheckboxes()}
                            <button onClick={this.continue}>Dalej</button>
                        </div>

                </section>
                </div>
            </React.Fragment>
        )
            ;
    }

}

export default FirstPage;
