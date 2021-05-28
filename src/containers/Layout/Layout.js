import React, { Component } from 'react';

import classes from './Layout.css';

import Header from '../../components/UI/Header/Header';
import PlayerMove from '../../components/UI/Move/PlayerMove/PlayerMove';
import GameRound from '../../components/UI/Move/GameRound/GameRound';

class Layout extends Component {
    state = {
        gamePlaying: false,
        playerMove: 'rock',
        computerMove: 'rock',
        roundWinner: 'player',
        score: {
            player: 0,
            computer: 0
        },
        showRules: false,
        roundOwn: false,
        count: 1,
        UIState: 'playerMove'
    }

    playerMoveHandler = (moveName) => {
        const oldState = {...this.state};
        
        const newUIState = 'computerMove';
        const newPlayerMove = moveName;
        const newComputerMove = this.generateComputerMove();

        oldState.UIState = newUIState;
        oldState.playerMove = newPlayerMove;
        oldState.computerMove = newComputerMove;

        const updatedState = {...oldState};
        
        this.setState(updatedState);
        this.checkRoundWinner(updatedState);

    }

    computerMoveHandler = (moveName) => {
        console.log('Computer move made!');
    }

    generateComputerMove = () => {
        let num = Math.floor(Math.random() * 3);

        if(num===0) return 'rock';
        if(num===1) return 'paper';
        if(num===2) return 'scissors';
    }

    checkRoundWinner = (currentState) => {
        const playerMove = currentState.playerMove;
        const computerMove = currentState.computerMove;

        let winner = '';

        if(playerMove === computerMove){
            winner = 'draw';
        }
        else if(playerMove === 'rock' && computerMove === 'scissors') {
            winner = 'player';
        }
        else if(playerMove === 'paper' && computerMove === 'rock') {
            winner = 'player';
        }
        else if(playerMove === 'scissors' && computerMove === 'paper') {
            winner = 'player';
        }
        else if(playerMove === 'rock' && computerMove === 'paper') {
            winner = 'computer';
        }
        else if(playerMove === 'paper' && computerMove === 'scissors') {
            winner = 'computer';
        }
        else if(playerMove === 'scissors' && computerMove === 'rock') {
            winner = 'computer';
        }
        const newRoundWinner = winner;
        
        const oldState = {...currentState};
        let currentPlayerScore = oldState.score.player;
        let currentComputerScore = oldState.score.computer;
        
        if(newRoundWinner === 'player') {
            currentPlayerScore++;
        } else if(newRoundWinner === 'computer') {
            currentComputerScore++;
        }

        oldState.roundWinner = newRoundWinner;
        oldState.score.player = currentPlayerScore;
        oldState.score.computer = currentComputerScore;
        const newState = {...oldState};
        this.setState(newState);
    }

    playAgainHandler = () => {
        console.log('clicked');
        const currentState = {...this.state};
        currentState.UIState = 'playerMove';
        const changedState = {...currentState};
        this.setState(changedState);
    }

    render() {
        console.log(this.state);
        let display;
        if(this.state.UIState === 'playerMove') {
            display = <PlayerMove 
                        clicked={this.playerMoveHandler} 
                        name="Player Move Container" 
                        state={this.state} />;
        }
        if(this.state.UIState === 'computerMove') {
            display = <GameRound 
                        playerMove={this.state.playerMove} 
                        computerMove={this.state.computerMove} 
                        roundWinner={this.state.roundWinner}
                        playAgain={this.playAgainHandler}
                        playerPlayed={true}
                        computerPlayed={true}
                        roundPlayed={true} />
        }

        return(
            <div className={classes.Layout}>
                <Header playerRoundScore={this.state.score.player} />
                <main>
                    {display}
                </main>
            </div>
        )
    }
}

export default Layout;
