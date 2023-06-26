import './AppTranslator.scss';

// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
export default function App() {

    function clicked() {
        console.log("Clicked");
    }

    return (
        <div>
            <br></br>
            <h1>AppTranslator</h1>
            <br></br>
            <div className="buttonRow">
                <p>Translation row 1: </p>
                <button onClick={clicked}>clicked 1</button>
                <button onClick={clicked}>clicked 2</button>
                <button onClick={clicked}>clicked 3</button>
                <button onClick={clicked}>clicked 4</button>
                <button onClick={clicked}>clicked 5</button>
            </div>
            <br></br>
            <div className="buttonRow">
                <p>Translation row 2: </p>
                <button onClick={clicked}>clicked 1</button>
                <button onClick={clicked}>clicked 2</button>
                <button onClick={clicked}>clicked 3</button>
                <button onClick={clicked}>clicked 4</button>
                <button onClick={clicked}>clicked 5</button>
            </div>
        </div>
    )
}