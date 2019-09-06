import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import EntryLine from '../../components/EntryLine/EntryLine';
import GpaTable from '../../components/Tables/GpaTable/GpaTable';
import DisplayBox from '../../components/DisplayBox/DisplayBox';

import '../Calculator.css';

class GpaCalculator extends React.Component {
    state = {
        prevAverage: '',
        prevWeight: '',
        average: 0,
        weight: 0
    }

    getAverage = (average, weight) => {
        this.setState({
            average: average,
            weight: weight
        })
    }

    getPrevAverage = (id, field, value) => {
        if (field === "grade") {
            this.setState({ prevAverage: value });
        } else {
            this.setState({ prevWeight: value })
        }
    }

    render() {
        var prevAverage = Number(parseFloat(this.state.prevAverage).toFixed(2)) || 0;
        var prevWeight = Number(parseFloat(this.state.prevWeight).toFixed(2)) || 0;
        var totalCredits = prevWeight + this.state.weight;
        var cgpa = 0;
        if (totalCredits !== 0) {
            cgpa = Number(((prevAverage * prevWeight) + (this.state.average * this.state.weight)) / totalCredits).toFixed(2);
        }
        return (
            <div className="calculator">
                <div className="titleBar">
                    <Logo type="gpa" />
                    <div className="link">
                        <Link to="/grade">Grade Calculator →</Link>
                    </div>
                </div>
                <h2>1. Enter current GPA and credits completed so far (if applicable).</h2>
                <div className="averageCalc" style={{ padding: 5 }}>
                    <div className="columnHeaders">
                        <span className="header">GPA</span>
                        <span className="header">Credits</span>
                    </div>
                    <EntryLine grade={this.state.prevAverage} weight={this.state.prevWeight} onChange={this.getPrevAverage} />
                </div>
                <h2>2. Enter existing/expected grades for this semester.</h2>
                <div className="averageCalc">
                    <div className="table">
                        <div className="columnHeaders">
                            <span className="header">Grade(%)</span>
                            <span className="header">Credits</span>
                        </div>
                        <GpaTable handleAverage={this.getAverage} />
                    </div>
                    <div className="result">
                        <DisplayBox field="sGPA" value={this.state.average} />
                        <DisplayBox field="cGPA" value={cgpa} />
                    </div>
                    <div className="result">
                        <DisplayBox field="Total credits" value={totalCredits} />
                    </div>
                </div>

            </div>
        );
    }
}

export default GpaCalculator;