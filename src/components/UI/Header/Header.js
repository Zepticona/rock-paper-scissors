import React from 'react';
import classes from './Header.css';
import Logo from '../../../assets/images/logo.svg';

const header = props => {
    let display;
    console.log(props);
    if(props.hide) {
        display = null;
    } else {
        display = (
            <header className={classes.Header}>
            <img src={Logo} alt="Logo" className={classes.Logo} />
            <div className={classes.ScoreBox}>
                Score
                <span className={classes.ScoreBox__Score}>12</span>
            </div>
        </header>
        )
    }
    return (
        display
    )
}

export default header;