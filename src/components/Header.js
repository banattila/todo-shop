import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/note.png';
import { links } from "../utils/constants";
import '../styles/header.css';

const Header = () => {

    const [smallScreen, setSmallScreen] = useState(true);

    return (
        <header>
            <div className="header-title">
            <img className="logo" src={logo} alt="logo"/>
                <h4 className="main-title">Listák</h4>
            </div>
            <nav>
                {links.map((item, index) => {
                    return <Link key={index} className="links" to={item.to}>{item.title}</Link>
                })}
            </nav>
        </header>
    );
}

export default Header;