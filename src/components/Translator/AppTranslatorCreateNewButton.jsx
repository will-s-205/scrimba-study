// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import './AppTranslator.scss';
import { useState } from 'react';

export default function AppTranslatorCreateNewButton() {
    const [elements, setElements] = useState([]);

    const handleClick = () => {
      const newElement = <button onClick={handleClick}>variable button2</button>;
      setElements(prevElements => [...prevElements, newElement]);
    };

    const newButton = <button onClick={handleClick}>variable button</button>

    return (
        <div>
            {newButton}
            {elements.map((element, index) => <div key={index}>{element}</div>)}
        </div>
    )
}