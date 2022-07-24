import React from "react";
import '../../styles/items.css';

const ShoppingItem = (props) => {
    return (
        <article className={"item-wrapper " + (props.item.important ? 'important': '')}>
            <h3 className="item-name">{props.item.name}</h3>
            <p>Mennyiség: <span className="quantity">{props.item.quantity}</span></p>
            <p className="added">Hozzáadva:</p>
            <p> {props.item.added}</p>
            <label className="finished">Megvan<input type="checkbox" name="finished"/></label>
        </article>

    );
}

export default ShoppingItem;