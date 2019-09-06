import React from 'react';

import './EntryLine.css';

class EntryLine extends React.Component {
    handleChange = (event) => {
        this.props.onChange(this.props.id, event.target.className, event.target.value)
    }

    render() {
        return (
            <div className="gradeEntry">
                <span className="entryBox">
                    <input className="grade" type="number" value={this.props.grade} onChange={this.handleChange} /> 
                </span>
                <span className="entryBox">
                    <input className="weight" type="number" value={this.props.weight} onChange={this.handleChange} />
                </span>
            </div>
        );
    }
}

export default EntryLine;