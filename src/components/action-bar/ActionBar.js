import React, { useState } from "react";
import VanillaTilt from 'vanilla-tilt';
import domtoimage from 'dom-to-image';
import JSZip from 'jszip';
import fileSaver from 'file-saver';
import './action-bar.css';

export default function ActionBar() {

    const [activeCards, setActiveCards] = useState(null);

    function updateActiveCardCount(count) {
        setActiveCards(count.length);
    }

    function handleSelectClick(selection) {

        const shots = document.querySelectorAll('.export-overlay');

        shots.forEach(shot => {

            if (selection === "all") {
                shot.classList.add("active");

                if (shot.parentElement.parentElement.dataset.tilt) {
                    VanillaTilt.init(shot.parentElement.parentElement);
                    shot.parentElement.parentElement.vanillaTilt.destroy();
                }

            } else {
                shot.classList.remove('active');
                VanillaTilt.init(shot.parentElement.parentElement)
            }
        });

        // update the number of cards selected;
        updateActiveCardCount(getSelectedShots());
    }

    function getSelectedShots() {
        const selectedActiveShots = document.querySelectorAll('.export-overlay.active');
        const shots = document.querySelectorAll('.export-overlay');
        let selectedShotArray = [];

        if (selectedActiveShots.length === 0) {
            shots.forEach(shot => {
                const parentShotCard = shot.parentElement.parentElement.dataset;
                const shotArray = [];
                shotArray.push(parentShotCard);
                let associatedImage = shot.nextSibling;
                const height = associatedImage.naturalHeight;
                const width = associatedImage.naturalWidth;
                associatedImage = domtoimage.toPng(associatedImage, { height: height, width: width, }).then(function (dataUrl) {
                    return dataUrl.replace("data:", "").replace(/^.+,/, "");
                });
                shotArray.push(associatedImage);
                selectedShotArray.push(shotArray);
            });
        } else {
            selectedActiveShots.forEach(selectedShot => {
                const parentShotCard = selectedShot.parentElement.parentElement.dataset;
                const shotArray = [];
                shotArray.push(parentShotCard);
                let associatedImage = selectedShot.nextSibling;
                const height = associatedImage.naturalHeight;
                const width = associatedImage.naturalWidth;
                associatedImage = domtoimage.toPng(associatedImage, { height: height, width: width, }).then(function (dataUrl) {
                    return dataUrl.replace("data:", "").replace(/^.+,/, "");
                });
                shotArray.push(associatedImage);
                selectedShotArray.push(shotArray);
            });
        }

        return selectedShotArray;
    }


    function handleDownloadClick() {
        const zip = new JSZip();
        const dataToZip = getSelectedShots();

        dataToZip.forEach(dataset => {
            zip.folder(`${dataset[0].title} (${dataset[0].id})`).file(`shot-info.txt`, `Title: ${dataset[0].title}\nDescription: ${dataset[0].description}\nTags: ${dataset[0].tags}\nPublished: ${dataset[0].published}`);
            zip.folder(`${dataset[0].title} (${dataset[0].id})`).file(`shot.png`, dataset[1], { base64: true, });
        })

        zip.generateAsync({ type: "blob" }).then(function (blob) {
            //fileSaver.saveAs(blob, "runitback.zip");
        }, function (err) {
            console.log(err);
        });
    }

    return (
        <div className="action-bar">
            <button onClick={() => handleSelectClick('all')} className="secondary">Select All Shots</button>
            <button onClick={() => handleSelectClick('none')} className="secondary">Unselect All Shots</button>
            {activeCards ? <button onClick={handleDownloadClick}>Download {activeCards ? activeCards : "All"} Shot{activeCards > 1 ? 's' : ''}</button> : ''}
            <button onClick={() => updateActiveCardCount(getSelectedShots())}>Get Count ({activeCards})</button>
        </div>
    )
}