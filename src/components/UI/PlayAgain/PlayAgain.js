import React from 'react';

import classes from './PlayAgain.css';

const playAgain = (props) => {
    let roundMessage;
    let styles;
    styles = {
        backgroundColor: 'green',
        color: '#eee'
    }
    if(props.roundWinner === 'player') {
        roundMessage = 'You\'ve won the round!';
        
    } else if(props.roundWinner === 'computer') {
        roundMessage = 'You\'ve lost the round!';
        styles.backgroundColor = 'orangeRed';
    } else if(props.roundWinner === 'draw') {
        roundMessage = 'The round was a draw!';
        styles.backgroundColor = 'gray'
    }
    
    return (
        <div className={classes.PlayAgain} >
            <p className={classes.RoundState}>{roundMessage}</p>
            <button style={styles} onClick={props.clicked} className={classes.PlayAgainBtn}>Play Again</button>
        </div>
    )
}

export default playAgain;