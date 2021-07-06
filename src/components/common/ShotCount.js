import React, { useState, useEffect } from "react";

export default function ShotCount(props) {

    console.log(props);

    const [shotCount, setShotCount] = useState("0");

    let shots = props.activeShots;

    if (shots > 0) {
        setShotCount(shots.length);
    } else {
        return shotCount;
    }

    console.log(shots);

    return (
        <>
            {shots}
        </>
    )
}