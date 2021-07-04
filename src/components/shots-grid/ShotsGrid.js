import ShotCard from "../shot-card/ShotCard.js";
//import JSZip from "jszip";
import "./shots-grid.css";

export default function ShotsGrid(props) {

    console.log(props);
    const shots = props.data;

    return (
        <section data-pristine="true" className="shots-grid">
            {shots.map((shot) => {
                return (
                    <ShotCard key={shot.id} shotData={shot} />
                );
            })}
        </section>
    );
}