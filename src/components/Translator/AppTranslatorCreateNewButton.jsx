// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import './AppTranslator.scss';
import { useEffect, useState } from 'react';

export default function AppTranslatorCreateNewButton(props) {
    const [elements, setElements] = useState([]);

    // useEffect(()=> {

    // }, [elements])

    const deleteByValue = value => {
        setElements(oldValues => {
            return oldValues.filter(data => data !== value)
        })
        console.log(value);
    }

    const deleteById = id => {
        setElements(oldValues => {
            return oldValues.filter(data => data.id !== id)
        })
        console.log(id)
    }

    const deleteByIndex = index => {
        setElements(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
    }
    
    const deleteByName = name => {
        setElements(oldValues => {
            return oldValues.filter(data => data !== name)
        })
        console.log(name)
    }
    
    // function delete1() {
    //     elements.map(

    //     )

    //     // setElements(oldValues => {
    //     //     return oldValues.filter(data => data !== name)
    //     // })
    // }

    // let style = { display: "none" }

    const createMapButton1 = () => {
        const newElement = <button onClick={() => deleteByIndex(0)}>map button1</button>;
        setElements(prevElements => [...prevElements, newElement]);
    };

    const createMapButton2 = () => {
        const newElement = <button onClick={() => deleteByIndex(0)}>map button2</button>;
        setElements(prevElements => [...prevElements, newElement]);
        console.log("created button 2")
    };

    const createMapButton3= (name) => {
        // const newElement = <button onClick={() => deleteByIndex(index)} index={createMapButton3.length}>map button3</button>;
        // const newElement = <button onClick={() => deleteByIndex(index)} name={createMapButton3.name}>map button3</button>;
        const newElement = <button onClick={() => deleteByName("map button3")} name={createMapButton3.name}>map button3</button>;
        setElements(prevElements => [...prevElements, newElement]);
    };

    const newButton = <button onClick={createMapButton1}>variable button1</button>
    const newButton2 = <button onClick={createMapButton2}>variable button2</button>
    const newButton3 = <button onClick={createMapButton3}>variable button3</button>

    return (
        <div>
            <br></br>
            {newButton}
            {newButton2}
            {newButton3}
            <br></br>
            <br></br>
            {elements.map((element, index) => 
            <div key={index} index={index}>{element}</div>)
            }
        </div>
    )
}
