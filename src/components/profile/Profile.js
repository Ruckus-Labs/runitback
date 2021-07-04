import './profile.css';
import ActionBar from '../action-bar/ActionBar.js';

export default function Profile(props) {

    return (
        <section className="loaded-profile">
            <aside className="meta">
                <img src={props.data.avatar_url} alt="Profile." />
                <h2>{props.data.name}</h2>
            </aside>
            <nav className="details">
                <ul>
                    <li>Profile Created <span className="count">{props.data.created_at}</span></li>
                    <li>Total Shots <span className="count">{props.shotData.length}</span></li>
                </ul>
                <ActionBar />
            </nav>
        </section>
    )
}