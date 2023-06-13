import react_logo from '../react-logo.png';

export default function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <div className="react-facts-and-icon">
                <img src={react_logo} className="nav-logo" alt="react logo" />
                <p className="logo-text">ReactFacts</p>
                </div>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
