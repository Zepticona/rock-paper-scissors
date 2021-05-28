import React from 'react';
import classes from './Header.css';
import Logo from '../../../assets/images/logo.svg';

const header = props => {
    return (
        <header className={classes.Header}>
            <img src={Logo} alt="Logo" className={classes.Logo} />
            <div className={classes.ScoreBox}>
                Score
                <span className={classes.ScoreBox__Score}>{props.playerRoundScore}</span>
            </div>
        </header>
    )
}

export default header;