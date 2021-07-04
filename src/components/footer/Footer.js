import './footer.css';
import Logo from "../common/Logo.js";
export default function Footer() {
    return (
        <footer>
            <Logo />
            <p>RunItBack is a tool to help you export your data from <a href="https://www.dribbble.com">Dribbble</a>.</p>
            <aside className="subfooter">
                <p>© 2021</p>
                <p>Made with love by <a href="https://makki.pro">R</a>.</p>
                <p>Credits and thanks to <a href="https://github.com/micku7zu/vanilla-tilt.js">Vanilla Tilt</a>, <a href="https://stuk.github.io/jszip/">JSZip</a>, and <a href="https://feathericons.com/">Feather</a>.</p>
            </aside>
        </footer>
    )
}