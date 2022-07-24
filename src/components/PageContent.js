import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { dateData, shoppingData, todoData } from "../datas/datas";
import Page from "../pages/Page";
import '../styles/pageContent.css';
import Login from "../pages/Login";

const PageContent = () => {

    const [shopping, setShoppingData] = useState(shoppingData);
    const [todoing, setTodoing] = useState(todoData);
    const [dateing, setDateing] = useState(dateData);


    return (
        <Routes>
            <Route path="/shopping-list" 
                element={<Page title="Bevásárlások listája és hozzáadása" componentName="shopping" items={shopping}/>}>
            </Route>
            <Route path="/todo-list"
                element={<Page title="Tevékenységek listája és hozzáadása" componentName="todo" items={todoing}/>}>
                </Route>
            <Route path="/date"
                element={<Page title="Időpontok listája és hozzáadása" componentName="date" items={dateing}/>}>
                </Route>
            <Route path="/login"
                element={<Login />}>
                </Route>
        </Routes>
    );
}

export default PageContent;