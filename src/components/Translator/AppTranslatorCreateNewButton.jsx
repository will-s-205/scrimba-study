// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import './AppTranslator.scss';
import { useState } from 'react';

export default function AppTranslatorCreateNewButton(props) {
    const [elements, setElements] = useState([]);

    // const deleteByValue = value => {
    //     setElements(oldValues => {
    //       return oldValues.filter(data => data !== value)
    //     })
    //     console.log(value);
    //   }

    const deleteByIndex = index => {
        setElements(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
      }
    
    let style={display:"none"}

    const createMapButton1 = () => {
        const newElement = <button onClick={() => deleteByIndex(0)}>map button1</button>;
        setElements(prevElements => [...prevElements, newElement]);
    };

    const createMapButton2 = () => {
        const newElement = <button onClick={createMapButton2}>map button2</button>;
        setElements(prevElements => [...prevElements, newElement]);
    };

    const newButton = <button onClick={createMapButton1}>variable button1</button>
    const newButton2 = <button onClick={createMapButton2}>variable button2</button>

    return (
        <div>
            <br></br>
            {newButton}
            {newButton2}
            {elements.map((element, index) => <div key={index}>{element}</div>)}
        </div>
    )
}