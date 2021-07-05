import './profile.css';
import ActionBar from '../action-bar/ActionBar.js';

export default function Profile(props) {

    let profileBirthday = new Date(props.data.created_at).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });;

    return (
        <section className="loaded-profile">
            <aside className="meta">
                <img src={props.data.avatar_url} alt={`${props.data.name}'s profile.`} />
                <h2>{props.data.name}</h2>
            </aside>
            <nav className="details">
                <ul>
                    <li>Profile Created <span className="count">{profileBirthday}</span></li>
                    <li>Total Shots <span className="count">{props.shotData.length}</span></li>
                </ul>
                <ActionBar />
            </nav>
        </section>
    )
}