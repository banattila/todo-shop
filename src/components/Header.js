import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/note.png';
import { links } from "../utils/constants";

const Header = () => {

    const [smallScreen, setSmallScreen] = useState(true);

    return (
        <header>
            <div>
                <h4>Listák</h4>
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                {links.map((item, index) => {
                    return <Link key={index} to={item.to}>{item.title}</Link>
                })}
            </nav>
        </header>
    );
}

export default Header;