import React, { Component } from 'react';
import logo from "../logo.svg";

class Country extends Component {
    state = {
        name: 'Nauru',
        flag: 'http://worldometers.info/img/flags/nr-flag.gif',
        gold: 0,
    }

    handleClick = () => {
        this.setState({ gold: this.state.gold + 1 } )
    }

    render() {
        return (
            < div className="Country" >
                <div>
                    Country:
                    <a className='CountryName' >
                        { this.state.name }
                    </a>
                    <img src={this.state.flag} className="CountryFlag" alt="Flag" />
                </div>
                <div>
                    Current Number of Gold Medals:
                    <a className='MedalCount' >
                        { this.state.gold }
                    </a>
                </div>
                <button onClick={ this.handleClick } className='IncrMedalButton' >
                    Increment Gold Medal Count
                </button>
            </div>
        );
    }
}

export default Country
