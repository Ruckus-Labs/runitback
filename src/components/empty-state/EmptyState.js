import './empty-state.css';
import RunItBackButton from '../run-it-back-button/RunItBackButton';

export default function EmptyState({ setShotData }) {
    return (
        <div className="empty-state-container">
            <p>To get started, upload your export.json file from Dribbble.</p>
            <p className="small">To get your export.json file, navigate to your Account Settings in Dribbble. Then, navigate to the <a target="_blank" rel="noreferrer" href="https://dribbble.com/account/export">"Data Export" tab</a>. Finally, click the "Request data" button.</p>
            <RunItBackButton setShotData={setShotData} />
        </div>
    )
}