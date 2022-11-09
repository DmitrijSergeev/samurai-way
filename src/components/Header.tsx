import React from "react";
import samurai from "../img/samurai.png";
import classes from './Header.module.css';

const Header = () =>{
    return (
        <header className={classes.header}>
            <img src={samurai} alt={"logo"} />
        </header>
    )
}
export default Header;