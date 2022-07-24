import React, { useState } from "react";
import { users } from "../datas/datas";
import '../styles/login.css';

const Login = (props) => {

    const [selfUsers, setSelfUsers] = useState(users);

    return (
        <main className="page-content">
            <h4 className="page-title">Bejelentkezés</h4>
            <form className="login-form">
                <div className="login-field">
                    <label className="input-label">Név:</label>
                    <input className="input-field" type="text" name="username" placeholder="Sanyi"/>
                </div>
                <div className="login-field">
                    <label className="input-label">Jelszó:</label>
                    <input className="input-field" type="password" name="pwd" placeholder="Titok"/>
                </div>
                <button className="login-btn">Bejelentkezés</button>
            </form>
        </main>
    );
}

export default Login;