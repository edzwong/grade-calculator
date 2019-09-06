import React from 'react';
import { Link } from 'react-router-dom';

import GradeTable from '../../components/Tables/GradeTable/GradeTable';
import Logo from '../../components/Logo/Logo';
import DisplayBox from '../../components/DisplayBox/DisplayBox';

import '../Calculator.css';

class GradeCalculator extends React.Component {
    state = {
        average: 0,
        weight: 0,
        extra1: '',
        extra2: '',
        extra1prompt: '',
        extra2prompt: ''
    }

    getAverage = (average, weight) => {
        this.setState({
            average: average,
            weight: weight,
            extra1: '',
            extra1prompt: '',
            extra2: '',
            extra2prompt: ''
        });
    }

    calcExtra1 = (e) => {
        var newValue = '';
        if (e.target.value !== '') {
            var decimalWeight = this.state.weight / 100;
            newValue = ((e.target.value - (this.state.average * decimalWeight)) / (1 - decimalWeight)).toFixed(2);
        }
        this.setState({ extra1: newValue, extra1prompt: e.target.value });
    }

    calcExtra2 = (e) => {
        var newValue = '';
        if (e.target.value !== '') {
            var decimalWeight = this.state.weight / 100;
            newValue = ((this.state.average * decimalWeight) + (e.target.value * (1 - decimalWeight))).toFixed(2);
        }
        this.setState({ extra2: newValue, extra2prompt: e.target.value });
    }

    render() {
        var error = false;
        var errorMessage = '';
        if (this.state.weight >= 100) {
            error = true;
            errorMessage = "The total weight of your assignments is already 100% or greater.";
        }
        return (
            <div className="calculator">
                <div className="titleBar">
                    <Logo type="grade" />
                    <div className="link">
                        <Link to="/gpa">GPA Calculator →</Link>
                    </div>
                </div>
                <span>Instructions: Enter your grades and how much they're worth as percentages. Don't enter the percent symbol (%).</span>
                <div className="averageCalc">
                    <div className="table">
                        <div className="columnHeaders">
                            <span className="header">Grade(%)</span>
                            <span className="header">Weight(%)</span>
                        </div>
                        <GradeTable handleAverage={this.getAverage} />
                    </div>
                    <div className="result">
                        <DisplayBox field={"Current avg"} value={this.state.average} percentage />
                        <DisplayBox field={"Total weight"} value={this.state.weight} percentage />
                    </div>
                </div>
                <span>What average grade on remaining assignments is needed for a final grade of</span>
                <input type="number" style={{ height: 18, width: 55, margin: 5 }} value={this.state.extra1prompt} onChange={this.calcExtra1} disabled={error} />?
                <div className="errorMessage">{errorMessage}</div>
                <div className="averageCalc">
                    <DisplayBox field={"You need"} value={this.state.extra1} percentage error={error} />
                </div>
                <span>What's my final grade if the average grade of my remaining assignments is</span>
                <input style={{ height: 18, width: 55, margin: 5 }} value={this.state.extra2prompt} onChange={this.calcExtra2} disabled={error} />?
                <div className="errorMessage">{errorMessage}</div>
                <div className="averageCalc">
                    <DisplayBox field={"Final grade"} value={this.state.extra2} percentage error={error} />
                </div>
            </div>
        );
    }
}

export default GradeCalculator;