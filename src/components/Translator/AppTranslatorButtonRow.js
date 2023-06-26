// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import './AppTranslator.scss';
import { useState } from 'react';

export default function AppTranslatorButtonRow() {
    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)

    function clicked() {
        console.log("Clicked");
    }

    function clicked1() {
        console.log("Clicked");
        setIsShown1(prevShown1 => !prevShown1)
    }

    function clicked2() {
        console.log("Clicked");
        setIsShown2(prevShown2 => !prevShown2)
    }

    function toggleShown1() {
        console.log("Toggle");
        setIsShown1(prevShown1 => !prevShown1)
    }

    function toggleShown2() {
        console.log("Toggle");
        setIsShown2(prevShown2 => !prevShown2)
    }

    return (
        <div>
            <br></br>
            <h1>AppTranslator</h1>
            <br></br>
            <div className="buttonRow">
                <p>Translation row 1: </p>
                {isShown1 && <button onClick={clicked1}>clicked 1</button>}
                {isShown2 && <button onClick={clicked2}>clicked 2</button>}
                <button onClick={clicked}>clicked 3</button>
            </div>
            <br></br>
            <div className="buttonRow">
                <p>Translation row 2: </p>
                <button onClick={toggleShown1}>show 1</button>
                <button onClick={toggleShown2}>show 2</button>
                <button onClick={clicked}>show 3</button>
            </div>
        </div>
    )
}