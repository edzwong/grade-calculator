import React from 'react';
import EntryLine from '../components/EntryLine/EntryLine';

import './GradeCalculator.css';

class GradeCalculator extends React.Component {
    constructor() {
        super();
        this.state = {
            numEntry: 2,
            entries: [
                { id: 0, grade: '', weight: '' },
                { id: 1, grade: '', weight: '' }
            ]
        };
    }

    onChange = (id, field, value) => {
        var newArray = this.state.entries.slice();
        if (field === "grade") {
            newArray[id].grade = value;
        } else {
            newArray[id].weight = value;
        }
        this.setState({ entries: newArray });
    }

    onClick = () => {
        var average = 0;
        var weight = 0;
        for (var entry of this.state.entries) {
            average += entry.grade * (entry.weight / 100);
            weight += parseInt(entry.weight);
        };
        console.log(average);
        console.log(weight / 100 || 0);
    }

    clear = () => {
        var newArray = this.state.entries.slice();
        for (var entry of newArray) {
            entry.grade = '';
            entry.weight = '';
        };
        this.setState({ entries: newArray });
    }

    render() {
        return (
            <div className="gradeCalculator">
                <h1>Grade Calculator</h1>
                <span>Instructions: enter your grades and their weight as percentages but do not include the percent sign (%). </span>
                <div className="table">
                    <div className="columnHeaders">
                        <h3 className="header">Grade</h3>
                        <h3 className="header">Weight</h3>
                    </div>
                    {
                        this.state.entries.map(entry => (
                            <EntryLine
                                key={entry.id}
                                id={entry.id}
                                grade={entry.grade}
                                weight={entry.weight}
                                onChange={this.onChange} />
                        ))
                    }
                    <div className="buttons">
                        <button onClick={this.onClick}>Am I Failing?</button>
                        <button onClick={this.clear}>Clear</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default GradeCalculator;