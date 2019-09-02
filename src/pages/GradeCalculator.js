import React from 'react';
import EntryTable from '../components/EntryTable/EntryTable';

import './GradeCalculator.css';
import logo from '../images/f-img.jpeg';

class GradeCalculator extends React.Component {
    state = {
        average: 0,
        weight: 0
    }

    getAverage = (average, weight) => {
        this.setState({
            average: average,
            weight: weight
        })
    }

    printAverage = () => {
        if ((this.state.weight !== 0)) {
            console.log(this.state.average + " " + this.state.weight);
        }
    }

    render() {
        return (
            <div className="gradeCalculator">
                <div className="logo">
                    <img src={logo} alt="F-"/>
                    <h1>Grade Calculator</h1>
                </div>
                <span>Instructions: enter your grades and their weight as percentages but do not include the percent sign (%). </span>
                <div className="table">
                    <div className="columnHeaders">
                        <h3 className="header">Grade</h3>
                        <h3 className="header">Weight</h3>
                    </div>
                    <EntryTable handleAverage={this.getAverage} />
                    <button id="averageButton" onClick={this.printAverage}>Am I Failing?</button>
                </div>
            </div>
        );
    }
}

export default GradeCalculator;