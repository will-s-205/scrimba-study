import '../App.scss'
import small_icon from "../img/react-icon-small.png"

export default function Navbar(props) {

    return (
        <nav
            className={props.darkMode2 ? "dark" : ""}
        >
            <img
                className="nav--logo_icon"
                src={small_icon}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode2}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}