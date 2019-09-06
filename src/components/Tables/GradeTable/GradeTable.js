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
            ],
            numEntry: 4
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
            average += entry.grade * (entry.weight / 100);
            weight += Number(parseFloat(entry.weight).toFixed(2)) || 0;
        };
        if (weight !== 0) {
            var weightedAverage = (average/(weight/100)).toFixed(2);
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