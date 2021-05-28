import React from 'react';

import classes from './Paper.css';
import PaperIcon from '../../../../assets/images/icon-paper.svg';

const paper = (props) => {
    console.log(props);
    let styles = null;
    let playedBy = null;
    if(props.playerPlayed) {
        playedBy = 'You';
    } else if(props.computerPlayed) {
        playedBy = 'Computer'
    }

    if(props.view === 'playerMove') {
        styles = {
            marginTop: '150px'
        }
    }
    return (
        <div className={classes.Paper} style={styles} onClick={() => props.clickable ?  props.clicked('paper') : null} >
            <span className={classes.PlayedBy}>{playedBy}</span>
            <img src={PaperIcon} alt="Paper Icon" />
        </div>
    )
}

export default paper;