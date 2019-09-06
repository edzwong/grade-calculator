import React from 'react';
import EntryLine from '../../EntryLine/EntryLine';

import '../Table.css';

class GradeTable extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [
                { id: 0, grade: '', weight: '' },
                { id: 1, grade: '', weight: '' },
                { id: 2, grade: '', weight: ''},
                { id: 3, grade: '', weight: ''},
                { id: 4, grade: '', weight: ''}
            ],
            numEntry: 5
        };
    }

    onChange = (id, field, value) => {
        var newArray = this.state.entries.slice();
        if (field === "grade") {
            newArray[id].grade = value;
        } else {
            newArray[id].weight = value;
        }
        this.setState({ entries: newArray }, this.calcAverage());
    }

    calcAverage = () => {
        var average = 0;
        var weight = 0;
        for (var entry of this.state.entries) {
            average += this.uoftGPA(entry.grade) * (entry.weight);
            weight += Number(parseFloat(entry.weight).toFixed(2)) || 0;
        };
        if (weight !== 0) {
            var weightedAverage = (average/weight).toFixed(2);
            this.props.handleAverage(weightedAverage, weight);
        } else {
            this.props.handleAverage(0, 0);
        }
    }

    clear = () => {
        var newArray = this.state.entries.slice();
        for (var entry of newArray) {
            entry.grade = '';
            entry.weight = '';
        };
        this.setState({ entries: newArray }, this.calcAverage());
    }

    addRow = () => {
        this.setState((prevState) => ({ 
            entries: [...prevState.entries, {id: prevState.numEntry, grade: '', weight: ''}],
            numEntry: prevState.numEntry + 1 
            })
        )
    }

    uoftGPA = (grade, gradeScale) => {
        var gpa;
        var roundGrade = Math.round(grade);
        switch(true) {
            case roundGrade < 50:
                gpa = 0;
                break;
            case roundGrade < 53:
                gpa = 0.7;
                break;
            case roundGrade < 57:
                gpa = 1;
                break;
            case roundGrade < 60:
                gpa = 1.3;
                break;
            case roundGrade < 63:
                gpa = 1.7;
                break;
            case roundGrade < 67:
                gpa = 2;
                break;
            case roundGrade < 70:
                gpa = 2.3;
                break;
            case roundGrade < 73:
                gpa = 2.7;
                break;
            case roundGrade < 77:
                gpa = 3;
                break;
            case roundGrade < 80:
                gpa = 3.3;
                break;
            case roundGrade < 85:
                gpa = 3.7;
                break;
            default:
                gpa = 4;
        }
        return gpa;
    }

    render() {
        return (
            <div className="entryTable">
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
                    <button onClick={this.addRow}>Add New Row</button>
                    <button onClick={this.clear}>Clear</button>
                </div>
            </div>
        );
    }
}

export default GradeTable;