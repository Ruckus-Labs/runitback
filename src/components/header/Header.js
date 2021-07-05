import "./header.css";
import Logo from '../common/Logo.js';
import HelpCircle from "../common/HelpCircle.js";

function handleStartOverClick() {
    console.log('starting over!');
}

function handleDemoClick() {
    console.log('running demo');
}

function handleRunItBackClick() {
    console.log('running it back');
}



export default function Header() {
    return (
        <header>
            <Logo />
            {/*<HelpCircle />*/}
            {/*<button className="secondary" onClick={() => handleStartOverClick()}>Start Over</button>*/}
            {/*<button className="secondary" onClick={() => handleDemoClick()}>RunBack a Demo</button>*/}
            <button onClick={() => handleRunItBackClick()}>RunBack Your Data</button>
        </header>
    );
}