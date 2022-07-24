import React from "react";

const Footer = (props) => {
    return (
        <footer>
            Created by <span id="name">{props.name}</span>
        </footer>
    );
}

export default Footer;