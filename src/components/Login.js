import React from 'react';
import Header from './Header';
import { connect }  from 'react-redux';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }
    }
    handleNameChange = (e) => {
        console.log(e.target.value);
        this.setState({
            userName: e.target.value
        })
    };

    render() {
        return (
            <section>
                <Header/>
                <form onSubmit={(name) => this.props.setUserName(this.state.userName)}>
                    <input type='text' value={this.state.userName} onChange={this.handleNameChange}/>
                    <button type='submit'>Zaloguj się</button>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserName: (name) => dispatch({type: 'SETUSERNAME', name: name}),
    }
};

export default connect(null, mapDispatchToProps)(Login);