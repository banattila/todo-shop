import React from "react";
import '../styles/footer.css';

const Footer = (props) => {
    return (
        <footer>
            Created by <span id="name">{props.name}</span>
        </footer>
    );
}

export default Footer;