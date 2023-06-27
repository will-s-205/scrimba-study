// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import { nanoid } from 'nanoid';
import './AppTranslator.scss';
import { useEffect, useState } from 'react';

export default function AppTranslatorCreateNewButton() {
    const [elements, setElements] = useState([
        { id: "", name: "" },
        // {id:2},
        // {id:3},

        // { id: 1, name: "🍎 Apple" },
        // { id: 2, name: "🍊 Orange" },
        // { id: 3, name: "🍌 Banana" },
        // { id: 4, name: "🍇 Grapes" },
    ]);

    // useEffect(()=> {

    // }, [elements])

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

    // delete one item
    const deleteById2 = id => {
        setElements(oldValues => {
            return oldValues.filter(data => data.id !== id)
        })
    }

    // choose one item only
    const addById2 = id => {
        setElements(oldValues => {
            return oldValues.filter(data => data.id == id)
        })
    }

    // function delete1() {
    //     elements.map(

    //     )

    //     // setElements(oldValues => {
    //     //     return oldValues.filter(data => data !== name)
    //     // })
    // }

    // let style = { display: "none" }

    const handleClick = (event) => {
        // alert(event.target.innerText);    // Click Me
        // alert(event.target.tagName);      // BUTTON
        // console.log(event.target.target);
        // console.log(event.target.target.value);
        // console.log(event.target.value);
        // console.log(event.target.name);
        console.log(event.target.tagName); // BUTTON
        console.log(event.target.innerText); // -
    }

    const deleteByValue = (value) => {
        setElements(oldValues => {
            return oldValues.filter(data => data == value)
        })
    }

    const createMapButton1 = () => {
        const newElement = <div><button onClick={() => deleteByValue('map button1')}>map button1</button><button onClick={handleClick}>-</button></div>
        setElements(prevElements => [...prevElements, newElement]);
    };

    const createMapButton2 = () => {
        const newElement = <button onClick={() => deleteByIndex(0)}>map button2</button>;
        setElements(prevElements => [...prevElements, newElement]);
        console.log()
    };

    const createMapButton3 = () => {
        const newElement = <button>map button3</button>
        setElements(prevElements => [...prevElements, { id: nanoid() }, {name: "button333"}]);
    };

    const newButton = <button onClick={createMapButton1}>variable button1</button>
    const newButton2 = <button onClick={createMapButton2}>variable button2</button>
    const newButton3 = <button onClick={createMapButton3}>variable button3</button>

    function addNewButton(id, name, classname) {
        const current = [...elements];
        // current.push(...elements);
        // current.push({ id: 2, name: "🍊 Orange" });
        current.push({ id: id, name: name, classname: classname });
        setElements(current);
    }

    return (
        <div className='container2'>
            <div className='container3'>
                <h2>Container 3</h2>
                <br></br>
                {newButton}
                {newButton2}
                {newButton3}
                <br></br>
                <br></br>
            </div>
            <div className='container4'>
                <h2>Container 4</h2>
                {
                    // elements.map((element) => 
                    elements.map((element, index) =>
                        <div
                            key={index}
                            onClick={() => deleteById2(element.id)}
                        >
                            {element.id} 
                            {element.name}
                        </div>)
                    // <div
                    //     // key={nanoid()}
                    //     // id={nanoid()}
                    //     className='var-button1'
                    //     onClick={() => deleteById2(element.id)}
                    //     >
                    //     <button
                    //         // index={index}
                    //     >map button3</button>
                    //     {/* <button onClick={() => deleteById2(element.id)}>-</button> */}
                    // </div>
                    // )
                }
            </div>
        </div>
    )
}
