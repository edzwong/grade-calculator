import React from 'react';

import './DisplayBox.css';

const DisplayBox = ({ field, value, percentage, error }) => {
    var percent = '';
    if (percentage) {
        percent = "%";
    }

    var finalValue = `${value}${percent}`;
    if (error || value === '') {
        finalValue = 'n/a';
    }

    return (
        <div className="displayBox">
            <span className="field">{field}: </span>
            <span className="value">{finalValue}</span>
        </div>
    );
}

export default DisplayBox;