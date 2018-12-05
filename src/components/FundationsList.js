import React from 'react';

class FundationsList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section id='fundationsList-section'>
                <header>
                    <h3>Komu pomagamy?</h3>
                    <div className='fundationsList-decoration'/>
                </header>

            </section>
        );
    }
}

export default FundationsList;