import React from "react";

export default function Card(props) {
    const location = props.card.location;
    const locationToUppercase = location.toUpperCase();
    return (
        <div className="card--container">
            <div className="card--image-container">
                <img src={props.card.imageUrl} className="card--image"  alt="///"/>
            </div>
            <div className="card--info">
                <div className="card--info-title">
                    <img src="https://pngicon.ru/file/uploads/geometka.png" width="20px" />
                    <div className="card--location">
                        {locationToUppercase}
                    </div>
                    <div>
                        <a href={props.card.googleMapsUrl}>View on Google Maps</a>
                    </div>
                </div>
                <div className="card--main-title">{props.card.title}</div>
                <div className="card--dates">{props.card.startDate} - {props.card.endDate}</div>
                <div className="card--description">{props.card.description}</div>
            </div>
        </div>
    )
}