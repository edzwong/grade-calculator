import React from 'react';
import EntryTable from '../components/EntryTable/EntryTable';

import './GradeCalculator.css';

class GradeCalculator extends React.Component {
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
                    <EntryTable/>
                </div>
            </div>
        );
    }
}

export default GradeCalculator;