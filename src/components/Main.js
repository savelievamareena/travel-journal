import React from "react";
import data from "../data.js"
import Card from "./Card"

export default function Main() {
    const cards = data.map(card => {
        return <Card card={card} key={card.id} />
    })
    return (
        <div className="main--container">{cards}</div>
    )
}