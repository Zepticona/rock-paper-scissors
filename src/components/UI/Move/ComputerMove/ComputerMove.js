import React from 'react';

import classes from './ComputerMove.css';
import Rock from '../Rock/Rock';
import Paper from '../Paper/Paper';
import Scissors from '../Scissors/Scissors';

const computerMove = (props) => {
    let computerMove;
    if(props.computerMove === 'rock') {
        computerMove = <Rock clickable={false} />
    }
    if(props.computerMove === 'paper') {
        computerMove = <Paper clickable={false} />
    }
    if(props.computerMove === 'scissors') {
        computerMove = <Scissors clickable={false} />
    }
    return (
        <Rock clickable={false} />
    )
}

export default computerMove;