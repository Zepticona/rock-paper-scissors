import React from 'react';

import classes from './Rock.css';
import RockIcon from '../../../../assets/images/icon-rock.svg';

const rock = (props) => {
    let playedBy = null;
    if(props.playerPlayed) {
        playedBy = 'You';
    } else if(props.computerPlayed) {
        playedBy = 'Computer'
    }
    return (
        <div className={classes.Rock} onClick={() => props.clickable ?  props.clicked('rock') : null}>
            <span className={classes.PlayedBy}>{playedBy}</span>
            <img src={RockIcon} alt="rock Icon" />
        </div>
    )
}

export default rock;