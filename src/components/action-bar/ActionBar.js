import React, { useState } from "react";

import './action-bar.css';
import { react } from '@babel/types';



export default function ActionBar() {

    const [shotsSelected, setShotsSelected] = useState('0');

    function handleSelectClick(selection) {
        const shots = document.querySelectorAll('.export-overlay');

        shots.forEach(shot => {

            const selectedShots = document.querySelectorAll('.image-container .active');
            const numberOfSelectedShots = selectedShots.length;

            if (selection === "all") {
                shot.classList.add("active");
                setShotsSelected(numberOfSelectedShots);
            } else {
                shot.classList.remove('active');
                setShotsSelected(numberOfSelectedShots);
            }
        })
    }

    function getSelectedShots() {
        let selectedShots = document.querySelectorAll('.image-container .active');

        let numberOfSelectedShots = selectedShots.length;
        console.log(numberOfSelectedShots);
        setShotsSelected(numberOfSelectedShots);

        selectedShots.forEach(selectedImage => {
            const parentShotCard = selectedImage.parentElement.parentElement.dataset;
            const title = parentShotCard.title;
            const description = parentShotCard.description;
            const tags = parentShotCard.tags;
            const published = parentShotCard.published;
            console.log(title, description, tags, published);
        })
    }


    function handleDownloadClick() {
        getSelectedShots();
        console.warn('Downloading...')
    }

    return (
        <div className="action-bar">
            <button onClick={() => handleSelectClick('all')} className="secondary">Select All Shots</button>
            <button onClick={() => handleSelectClick('none')} className="secondary">Unselect All Shots</button>
            <button onClick={handleDownloadClick}>Download All {shotsSelected > 0 ? shotsSelected : ''} Shots</button>
        </div>
    )
}