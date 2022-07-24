import React from "react";
import '../styles/lists.css';
import DateItem from "./date/DateItem";
import ShoppingItem from "./shopping/ShoppingItem";
import TodoItem from "./todo/TodoItem";

const Lists = (props) => {

    const Components = {
        shopping: ShoppingItem,
        todo: TodoItem,
        date: DateItem
    }

    const ComponentName = Components[props.component];

    return (
        <section className="lists">
            {props.items.map((item, index) => {
                return <ComponentName key={index} item={item} />
            })}
        </section>
    );
}

export default Lists;