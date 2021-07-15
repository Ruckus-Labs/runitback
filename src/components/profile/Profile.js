import './profile.css';
import ActionBar from '../action-bar/ActionBar.js';

export default function Profile({ profileImage, numberOfShots, name, createdAt }) {


    let profileBirthday = new Date(createdAt).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });;

    return (
        <section className="loaded-profile">
            <aside className="meta">
                <img src={profileImage} alt={`${name}'s profile.`} />
                <h2>{name}</h2>
            </aside>
            <nav className="details">
                <ul>
                    <li>Profile Created <span className="count">{profileBirthday}</span></li>
                    <li>Total Shots <span className="count">{numberOfShots}</span></li>
                </ul>
                <ActionBar />
            </nav>
        </section>
    )
}