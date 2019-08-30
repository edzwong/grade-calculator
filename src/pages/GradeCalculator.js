import React from 'react';
import EntryLine from '../components/EntryLine/EntryLine';

import './GradeCalculator.css';

const GradeCalculator = () => (
    <div className="gradeCalculator">
        <h1>Grade Calculator</h1>
        <span>Instructions: enter your grades and their weight in the respective columns.</span>
        <div className="entries">
            <EntryLine/>
        </div>
        <div className="result"></div>
        <div className="calculateButton"></div>
    </div>
)

export default GradeCalculator;