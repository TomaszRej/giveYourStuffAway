import React from 'react';

class ImportantInfo extends React.Component {
    render() {
        return (
            <section id='importantInfo-section'>
                <div className='container'>
                    <h4>Ważne!</h4>
                    <p>{this.props.text}</p>
                </div>
            </section>
        );
    }
};


export default ImportantInfo;
