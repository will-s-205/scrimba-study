import react_logo from '../react-logo.png';

export default function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src={react_logo} className="nav-logo" alt="react logo" />
                <p style={{fontWeight: "bold"}}>ReactFacts</p>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
