import './footer.css';
import Logo from "../common/Logo.js";
import ruckusLogo from "../../assets/images/ruckus-logo.svg";

export default function Footer() {
    return (
        <footer>
            <aside className="superfooter">
                <Logo />
                <p>RunItBack is a tool to help you export your data from <a href="https://www.dribbble.com">Dribbble</a>.</p>
            </aside>
            <aside className="subfooter">
                <p>© 2021</p>
                <p>Made with love by <a href="https://makki.pro"><img className="ruckus-logo" src={ruckusLogo} alt="Ruckus Labs" /></a></p>
                <p>Credits and thanks to <a href="https://github.com/micku7zu/vanilla-tilt.js">Vanilla Tilt</a>, <a href="https://github.com/tsayen/dom-to-image">DOM to Image</a>, <a href="https://github.com/eligrey/FileSaver.js/">FileSaver</a>, <a href="https://stuk.github.io/jszip/">JSZip</a>, and <a href="https://feathericons.com/">Feather</a>. Built with <a href="https://www.reactjs.org">React</a>.</p>
            </aside>
        </footer>
    )
}