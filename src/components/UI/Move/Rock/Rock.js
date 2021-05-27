import React from 'react';

import classes from './Rock.css';
import RockIcon from '../../../../assets/images/icon-rock.svg';

const rock = (props) => {
    return (
        <div className={classes.Rock} onClick={() => props.clickable ?  props.clicked('rock') : null}>
            <img src={RockIcon} alt="rock Icon" />
        </div>
    )
}

export default rock;