import React from 'react';
import EntryLine from '../EntryLine/EntryLine';

import './EntryTable.css';

class EntryTable extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [
                { id: 0, grade: '', weight: '' },
                { id: 1, grade: '', weight: '' }
            ],
            numEntry: 2
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

    calcAverage = () => {
        var average = 0;
        var weight = 0;
        for (var entry of this.state.entries) {
            average += entry.grade * (entry.weight / 100);
            weight += parseInt(entry.weight) || 0;
        };
        console.log(average);
        console.log(weight / 100);
    }

    clear = () => {
        var newArray = this.state.entries.slice();
        for (var entry of newArray) {
            entry.grade = '';
            entry.weight = '';
        };
        this.setState({ entries: newArray });
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
                    <button onClick={this.calcAverage}>Am I Failing?</button>
                    <button onClick={this.addRow}>Add New Row</button>
                    <button onClick={this.clear}>Clear</button>
                </div>
            </div>
        );
    }
}

export default EntryTable;