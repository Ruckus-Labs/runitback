import { useState } from "react";

export default function ShotCount(props) {

    const [shotCount, setShotCount] = useState("0");

    let shots = props.activeShots;

    if (shots > 0) {
        setShotCount(shots.length);
    } else {
        return shotCount;
    }

    return (
        <>
            {shots}
        </>
    )
}