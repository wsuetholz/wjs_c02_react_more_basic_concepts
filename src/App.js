import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';
import Country from './components/country';

class App extends Component {
    state = {
        countries: [
            {
                id: 'as',
                name: 'Australia',
                flag: 'http://worldometers.info/img/flags/as-flag.gif',
                bronze: 0,
                gold: 0,
                silver: 0
            },
            {
                id: 'nr',
                name: 'Nauru',
                flag: 'http://worldometers.info/img/flags/nr-flag.gif',
                bronze: 0,
                gold: 0,
                silver: 0
            },
            {
                id: 'nz',
                name: 'New Zealand',
                flag: 'http://worldometers.info/img/flags/nz-flag.gif',
                bronze: 0,
                gold: 0,
                silver: 0
            }
        ]
    }

    handleAdjustCount = (countryId, medalType, adjustBy) => {
        function boundedIncrDecr (src, adj) {
            var result = src + adj;
            var min = 0;
            var max = 999999;

            if (result < min)
                result = min;
            if (result > max)
                result = max;

            return result;
        }

        var idx = this.state.countries.findIndex(c => c.id === countryId);
        if (idx !== -1) {
            var country = this.state.countries[idx];
            var newVal = 0;
            if (medalType === 'bronze') {
                newVal = boundedIncrDecr(country.bronze, adjustBy);
                country = Object.assign({}, country, { bronze: newVal })
            }
            else if (medalType === 'gold') {
                newVal = boundedIncrDecr(country.gold, adjustBy);
                country = Object.assign({}, country, { gold: newVal })
            }
            else if (medalType === 'silver') {
                newVal = boundedIncrDecr(country.silver, adjustBy);
                country = Object.assign({}, country, { silver: newVal })
            }
        }

        this.setState({ countries: [...this.state.countries.slice(0, idx), country, ...this.state.countries.slice(idx+1) ]})
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
              </header>
                { this.state.countries.map( country =>
                    <Country key={ country.id } country={ country } onChangeValue={ this.handleAdjustCount }
                />)}
            </div>
            );
    }

}

export default App;
