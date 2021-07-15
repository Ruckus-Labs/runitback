import "./header.css";
import Logo from '../common/Logo.js';
import RunItBackButton from "../run-it-back-button/RunItBackButton";
//import HelpCircle from "../common/HelpCircle.js";
//import ShotData from '../shot-data/ShotData';

export default function Header({ shotData, setShotData }) {

    return (
        <header>
            <Logo />
            {/*<HelpCircle />*/}
            {shotData && <button className="secondary" onClick={() => window.location.reload()}>Start Over</button>}
            {/*<button className="secondary" onClick={() => handleDemoClick()}>RunBack a Demo</button>*/}
            <RunItBackButton setShotData={setShotData} />
        </header>
    );
}