import React, { useState, useEffect } from "react";
import Checkmark from "../common/Checkmark.js";
import './shot-card.css';


export default function ShotCard(props) {

    const [isLoaded, setIsLoaded] = useState('false');

    // trigger useEffect to pass the not pristine statususeEffect()
    useEffect(() => { /* code */ });

    function handleCardClick(e) {
        const element = e.target;
        element.classList.contains('active') ? element.classList.remove('active') : element.classList.add('active');
    }

    function Image(props) {
        if (isLoaded) {
            return (
                <div
                    onClick={handleCardClick}
                    data-tilt={isLoaded}
                    data-tilt-scale="1.1"
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