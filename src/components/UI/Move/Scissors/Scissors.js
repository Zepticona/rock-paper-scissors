import React from 'react';

import classes from './Scissors.css';
import ScissorsIcon from '../../../../assets/images/icon-scissors.svg';

const scissors = (props) => {
    let playedBy = null;
    if(props.playerPlayed) {
        playedBy = 'You';
    } else if(props.computerPlayed) {
        playedBy = 'Computer'
    }
    return (
        <div className={classes.Scissors} onClick={() => props.clickable ?  props.clicked('scissors') : null} >
            <span className={classes.PlayedBy}>{playedBy}</span>
            <img src={ScissorsIcon} alt="Paper Icon" />
        </div>
    )
}

export default scissors;