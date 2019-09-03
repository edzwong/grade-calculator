import React from 'react';
import EntryTable from '../components/EntryTable/EntryTable';
import Logo from '../components/Logo/Logo';
import Result from '../components/Result/Result';

import './GradeCalculator.css';

class GradeCalculator extends React.Component {
    state = {
        average: 0,
        weight: 0,
    }

    getAverage = (average, weight) => {
        this.setState({
            average: average,
            weight: weight
        })
    }

    render() {
        return (
            <div className="gradeCalculator">
                <Logo type="grade"/>
                <span>Instructions: enter your grades and how much they're worth as percentages. </span>
                <div className="table">
                    <div className="columnHeaders">
                        <h3 className="header">Grade</h3>
                        <h3 className="header">Weight</h3>
                    </div>
                    <EntryTable handleAverage={this.getAverage} />
                    <button id="averageButton">Am I Failing?</button>
                </div>
                <Result average={this.state.average} weight={this.state.weight}/>
            </div>
        );
    }
}

export default GradeCalculator;