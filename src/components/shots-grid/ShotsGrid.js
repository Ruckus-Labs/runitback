import ShotCard from "../shot-card/ShotCard.js";
import "./shots-grid.css";

export default function ShotsGrid({ data, setData, numberOfActiveShots, setNumberOfActiveShots }) {

    const shots = data;

    return (
        <section data-pristine="true" className="shots-grid">
            {shots.map((shot) => {
                return (
                    <ShotCard numberOfActiveShots={numberOfActiveShots} setNumberOfActiveShots={setNumberOfActiveShots} key={shot.id} shotData={shot} />
                );
            })}
        </section>
    );
}