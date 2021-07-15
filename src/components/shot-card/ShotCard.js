import React from "react";
import VanillaTilt from 'vanilla-tilt';
import Checkmark from "../common/Checkmark.js";
import './shot-card.css';


export default function ShotCard({ shotData }) {

    VanillaTilt.init(document.querySelectorAll(".shot-card"));

    function handleCardClick(e) {

        const element = e.target;
        const parent = element.parentElement.parentElement;


        if (element.classList.contains('active')) {
            element.classList.remove('active');
            VanillaTilt.init(parent);
        } else {
            element.classList.add('active');
            //parent.vanillaTilt.destroy();
        }
    }

    function Image({ shotData }) {

        return (
            <div
                onClick={handleCardClick}
                className="image-container">
                <div className="export-overlay">
                    <Checkmark />
                </div>
                <img
                    data-key={shotData.id}
                    src={shotData.images.hidpi}
                    alt={shotData.title}
                />
            </div>
        )
    }

    return (
        <div
            data-tilt
            key={shotData.id}
            data-id={shotData.id}
            data-title={shotData.title}
            data-description={shotData.description.replace(/<\/?[^>]+(>|$)/g, "")}
            data-tags={shotData.tags}
            data-published={shotData.published_at}
            className="shot-card">
            <Image shotData={shotData} />
            <p>{shotData.title}</p>
        </div>
    )
}