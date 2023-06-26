// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import './AppTranslator.scss';
import { useState } from 'react';

export default function AppTranslatorButtonRow() {
    const [isShown, setIsShown] = useState(false)
    const [isShown2, setIsShown2] = useState(false)

    function clicked() {
        console.log("Clicked");
        setIsShown(prevShown => !prevShown)
    }
    
    function toggleShown(){
        console.log("Toggle");
        setIsShown(prevShown1 => !prevShown1)
    }
    
    function toggleShown2(){
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
                {isShown && 
                <button onClick={clicked}>clicked 1</button>
                }
                {isShown2 && 
                <button onClick={clicked}>clicked 2</button>
                }
                <button onClick={clicked}>clicked 3</button>
            </div>
            <br></br>
            <div className="buttonRow">
                <p>Translation row 2: </p>
                <button onClick={toggleShown}>clicked 1</button>
                <button onClick={toggleShown2}>clicked 2</button>
                <button onClick={clicked}>clicked 3</button>
            </div>
        </div>
    )
}