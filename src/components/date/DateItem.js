import React from "react";
import '../../styles/items.css';

const DateItem = (props) => {
    return (
        <article className={"item-wrapper " + (props.item.important ? 'important': '')}>
            <h3 className="item-name">{props.item.title}</h3>
            <p className="added">Hozzáadva:</p>
            <p>{props.item.added}</p>
            <p>Mikor:</p>
            <p>{props.item.date}</p>
            <label className="finished">Megvan<input type="checkbox" name="finished"/></label>
        </article>

    );
}

export default DateItem;