import React from 'react';

import './Result.css';

const Result = ({ average, weight }) => {
    var name = "result red";
    if (weight !== 0) {
        var message;
        if (average < 50) {
            message = "Yikes.";
        } else {
            message = "Congrats you're not failing!"
            name = "result";
        }
        return (
            <p className={name}>{message} You have an average of {average} on assignment(s) worth {weight} percent of your grade.</p>
        );
    } else {
        return (
            <p className={name}>Error, you have entered assignment(s) with a total weight of 0 percent.</p>
        );
    }
}

export default Result;