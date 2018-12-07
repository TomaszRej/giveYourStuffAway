import React from 'react';

class FoundationsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elementClicked: '1',
            itemsPerPage: 3,
            currentPage: 1
        }
    }

    handleClickOnList = (e) => {
        const clicked = e.target.dataset.id;
        this.setState({
            elementClicked: clicked,
            currentPage: 1

        })
    };
    handleClickOnPagination = (e, index) => {
        //console.log(e.target.innerText);
        this.setState({
            currentPage: index
        })
    };

    render() {
        if (this.props.data) {
            console.log(this.props.data.foundations);
            console.log(this.props.data.organizations.length);
            console.log(this.props.data.collections);
        }
        const numbersOfPagination = [];
        const lastIndex = this.state.currentPage * this.state.itemsPerPage;
        const firstIndex = lastIndex - this.state.itemsPerPage;
        //const currentNames = names.slice(firstIndex,lastIndex);
        let list = [];
        if (this.props.data) {
            let whichTab = '';
            switch (this.state.elementClicked) {
                case '1':
                    whichTab = this.props.data.foundations;
                    break;
                case '2':
                    whichTab = this.props.data.organizations;
                    break;
                case '3':
                    whichTab = this.props.data.collections;
                    break;
                default:
                    console.log('err');
            }
            const numbers = Math.ceil(whichTab.length / this.state.itemsPerPage);
            if (numbers > 1) {
                for (let i = 1; i <= numbers; i++) {
                    const el = <li className={this.state.currentPage === i ? 'active' : null}
                                   onClick={(e) => this.handleClickOnPagination(e, i)} key={i}>{i}</li>;
                    numbersOfPagination.push(el);
                }
            }
            const dividedWhichTab = whichTab.slice(firstIndex, lastIndex);
            list = dividedWhichTab.map((el, i) => {
                return <li key={i}>
                    <div className='displayList-left'>
                        <div className='displayList-name'> Fundacja "{el.name}"</div>
                        <div className='underFoundationName'>
                        <p>Cel i misja: {el.mission}</p>
                        <p>{el.whatCollect.join(', ')}</p>
                        </div>
                    </div>
                </li>
            })
        }
        return (
            <section id='foundationsList-section'>
                <header>
                    <h3>Komu pomagamy?</h3>
                    <div className='foundationsList-decoration'/>
                    <ul>
                        <li data-id="1" className={this.state.elementClicked == 1 ? 'active' : null}
                            onClick={this.handleClickOnList}>Fundacjom
                        </li>
                        <li data-id="2" className={this.state.elementClicked == 2 ? 'active' : null}
                            onClick={this.handleClickOnList}>Organizacjom pozarządowym
                        </li>
                        <li data-id="3" className={this.state.elementClicked == 3 ? 'active' : null}
                            onClick={this.handleClickOnList}>Lokalnym zbiórkom
                        </li>
                    </ul>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują. </p>
                </header>
                <div className='displayArea'>
                    <ul className='displayList'>
                        {list}
                    </ul>
                    <ul className='paginationList'>
                        {numbersOfPagination}
                    </ul>
                </div>
            </section>
        );
    }
}

export default FoundationsList;