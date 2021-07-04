import React, { useState, useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';
import Checkmark from "../common/Checkmark.js";
import './shot-card.css';

export function handleCardClick(e) {
    const element = e.target;
    if (element.classList.contains('active')) {
        element.classList.remove('active');
        VanillaTilt.init(element.parentElement.parentElement);

    } else {
        element.classList.add('active');
        element.parentElement.parentElement.vanillaTilt.destroy();
    }
}

export default function ShotCard(props) {

    VanillaTilt.init(document.querySelectorAll(".shot-card"));

    const [isLoaded, setIsLoaded] = useState('false');

    // trigger useEffect to pass the not pristine statususeEffect()
    useEffect(() => { /* code */ });

    function Image(props) {
        if (isLoaded) {
            return (
                <div
                    onClick={handleCardClick}
                    className="image-container">
                    <div className="export-overlay">
                        <Checkmark />
                    </div>
                    <img
                        data-loading={isLoaded}
                        data-key={props.shotData.id}
                        onLoad={() => setIsLoaded('true')}
                        src={props.shotData.images.hidpi}
                        alt={props.shotData.title}
                    />
                </div>
            )
        }
        return <h2>Loading...</h2>;
    }

    return (
        <div
            data-tilt
            key={props.shotData.id}
            data-title={props.shotData.title}
            data-description={props.shotData.description.replace(/<\/?[^>]+(>|$)/g, "")}
            data-tags={props.shotData.tags}
            data-published={props.shotData.published_at}
            className="shot-card">
            <Image shotData={props.shotData} />
            <p>{props.shotData.title}</p>
        </div>
    )
}