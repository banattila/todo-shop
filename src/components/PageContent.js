import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { dateData, shoppingData, todoData } from "../datas/datas";
import Page from "../pages/Page";
import '../styles/pageContent.css';

const PageContent = () => {

    const [shopping, setShoppingData] = useState(shoppingData);
    const [todoing, setTodoing] = useState(todoData);
    const [dateing, setDateing] = useState(dateData);


    return (
        <Routes>
            <Route path="/shopping-list" 
                element={<Page title="Bevásárlások" componentName="shopping" items={shopping}/>}>
            </Route>
            <Route path="/todo-list"
                element={<Page title="Tevékenységek" componentName="todo" items={todoing}/>}>
                </Route>
            <Route path="/date"
                element={<Page title="Időpontok" componentName="date" items={dateing}/>}>
                </Route>
        </Routes>
    );
}

export default PageContent;