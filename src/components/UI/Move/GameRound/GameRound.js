import React from 'react';

import classes from './GameRound.css';
import Rock from '../Rock/Rock';
import Paper from '../Paper/Paper';
import Scissors from '../Scissors/Scissors';
import PlayAgain from '../../PlayAgain/PlayAgain';

const gameRound = (props) => {
    let playerMove;
    if(props.playerMove === 'rock') {
        playerMove = <Rock clickable={false} />
    } else if(props.playerMove === 'paper') {
        playerMove = <Paper clickable={false} />
    } else if(props.playerMove === 'scissors') {
        playerMove = <Scissors clickable={false} />
    } 

    let computerMove;
    if(props.computerMove === 'rock') {
        computerMove = <Rock clickable={false} />
    } else if(props.computerMove === 'paper') {
        computerMove = <Paper clickable={false} />
    } else if(props.computerMove === 'scissors') {
        computerMove = <Scissors clickable={false} />
    }

    let playAgain;
    if(props.roundPlayed) {
        playAgain = <PlayAgain roundWinner={props.roundWinner} clicked={props.playAgain} />
    }
    return (
        <div className={classes.GameRound}>
            {playerMove}
            {playAgain}
            {computerMove}        
        </div>
    )
}

export default gameRound;