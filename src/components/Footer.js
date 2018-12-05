import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            errors: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.state.errors.splice();
        const errorMessage = 'Wypełnij pola formularza';

        if(this.state.name.length === 0 ||this.state.email.length === 0 || this.state.message.length === 0){
            errors.push(errorMessage);
        }
        if(errors.length !== 0){
            this.setState({
                errors: errors
            })
        }else {
            this.setState({
                errors: [],
                name: '',
                email: '',
                message: ''
            })
        }

    };

    render() {
        const errors = this.state.errors[0];
        return (
            <section id='footer-section'>
                <div className='footer-image'/>
                <div className='footer-content'>
                    <header>
                        <h3>Skontaktuj się z nam</h3>
                        <div className='footer-decoration'/>
                    </header>
                    <form onSubmit={this.handleSubmit} id='footer-form'>
                        <h4>Formularz kontaktowy</h4>
                        <div className='groupOfNameAndEmail'>
                            <label htmlFor="nameInput" className="nameInput">
                                <input type="text" id="nameInput" name='name' onChange={this.handleChange}
                                       placeholder="Imię" value={this.state.name}/>
                                <span className="label">Imię</span>

                            </label>
                            <label htmlFor="emailInput" className="emailInput">
                                <input type="email" id="emailInput" name='email' onChange={this.handleChange}
                                       placeholder="Email" value={this.state.email}/>
                                <span className="label">Email</span>

                            </label>
                        </div>
                        <textarea placeholder='Wiadomość' rows='1' name='message' onChange={this.handleChange}
                                  value={this.state.message}></textarea>
                        <div className='errors'style={{display: this.state.errors.length !== 0 ? 'block' : 'none' }}>{errors}</div>
                        <button type='submit'>Wyślij</button>
                    </form>
                    <div className='socialIcons'>
                        <span className='socialIcon'>
                            <i className="fab fa-facebook-f"/>
                        </span>
                        <span className='socialIcon'>
                            <i className="fab fa-instagram"/>
                        </span>

                    </div>
                </div>

            </section>);

    }

}

export default Footer;