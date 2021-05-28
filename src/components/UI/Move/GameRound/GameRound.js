import React from 'react';

import classes from './GameRound.css';
import Rock from '../Rock/Rock';
import Paper from '../Paper/Paper';
import Scissors from '../Scissors/Scissors';
import PlayAgain from '../../PlayAgain/PlayAgain';

const gameRound = (props) => {
    let playerMove;
    if(props.playerMove === 'rock') {
        playerMove = <Rock playerPlayed={true} clickable={false} />
    } else if(props.playerMove === 'paper') {
        playerMove = <Paper playerPlayed={true} clickable={false} />
    } else if(props.playerMove === 'scissors') {
        playerMove = <Scissors playerPlayed={true} clickable={false} />
    } 

    let computerMove;
    if(props.computerMove === 'rock') {
        computerMove = <Rock computerPlayed={true} clickable={false} />
    } else if(props.computerMove === 'paper') {
        computerMove = <Paper computerPlayed={true} clickable={false} />
    } else if(props.computerMove === 'scissors') {
        computerMove = <Scissors computerPlayed={true} clickable={false} />
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