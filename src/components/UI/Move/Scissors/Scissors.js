import React from 'react';

import classes from './Scissors.css';
import ScissorsIcon from '../../../../assets/images/icon-scissors.svg';

const scissors = (props) => {
    return (
        <div className={classes.Scissors} onClick={() => props.clickable ?  props.clicked('scissors') : null} >
            <img src={ScissorsIcon} alt="Paper Icon" />
        </div>
    )
}

export default scissors;