import React from 'react';
import Rock from '../Rock/Rock';
import Paper from '../Paper/Paper';
import Scissors from '../Scissors/Scissors';

import classes from './PlayerMove.css';

const playerMove = (props) => {
    console.log(props);
    return (
        <div className={classes.PlayerMove}>
            <Rock clicked={props.clicked} clickable={true} />
            <Paper clicked={props.clicked} view="playerMove" clickable={true} />
            <Scissors clicked={props.clicked} clickable={true} />
        </div>
    )
}

export default playerMove;