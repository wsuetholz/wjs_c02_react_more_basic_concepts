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
        const { onChangeValue, country } = this.props;

        return (
            < div className="Country" >
                <div>
                    Country:
                    <a className='CountryName' >
                        { country.name }
                    </a>
                    <img src={country.flag} className="CountryFlag" alt="Flag" />
                </div>
                <div>
                    Current Number of Gold Medals:
                    <a className='MedalCount' >
                        { country.gold }
                    </a>
                </div>
                <button onClick={ e => { onChangeValue (country.id, 'gold', 1); }} className='IncrMedalButton' >
                    Increment Gold Medal Count
                </button>
                <button onClick={ e => { onChangeValue (country.id, 'gold', -1); }} className='IncrMedalButton' >
                    Decrement Gold Medal Count
                </button>
            </div>
        );
    }
}

export default Country
