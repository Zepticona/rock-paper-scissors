import React from 'react';

import classes from './Paper.css';
import PaperIcon from '../../../../assets/images/icon-paper.svg';

const paper = (props) => {
    
    let styles = null;

    if(props.view === 'playerMove') {
        styles = {
            marginTop: '150px'
        }
    }
    return (
        <div className={classes.Paper} style={styles} onClick={() => props.clickable ?  props.clicked('paper') : null} >
            <img src={PaperIcon} alt="Paper Icon" />
        </div>
    )
}

export default paper;