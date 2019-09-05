import React from 'react';

import Logo from '../../components/Logo/Logo';
import EntryTable from '../../components/EntryTable/EntryTable';

import '../Calculator.css';

class GpaCalculator extends React.Component {
    state = {
        prevAverage: 0,
        prevWeight: 0,
        average: 0,
        weight: 0
    }

    getAverage = (average, weight) => {
        this.setState({
            average: average,
            weight: weight
        })
    }

    render() {
        return(
            <div className="calculator">
                <Logo type="gpa" />
                <span>Instructions: enter your grades and how many credits they're worth. </span>
                <div className="table">
                    <div className="columnHeaders">
                        <h3 className="header">Grade</h3>
                        <h3 className="header">Credits</h3>
                    </div>
                    <EntryTable handleAverage={this.getAverage} />
                </div>
            </div>
        );
    }
}

export default GpaCalculator;