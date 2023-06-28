// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import { nanoid } from 'nanoid';
import './AppTranslator.scss';
import { useEffect, useState } from 'react';

export default function AppTranslatorCreateNewButton() {
    const [elements, setElements] = useState([
        // { id: "", name: "", boolean: true },
        // {id:2},
        // {id:3},

        // { id: 1, name: "🍎 Apple" },
        // { id: 2, name: "🍊 Orange" },
        // { id: 3, name: "🍌 Banana" },
        // { id: 4, name: "🍇 Grapes" },
    ]);

    useEffect(() => {
        // console.log(elements)
    }, [elements])

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
            return oldValues.filter(data => data.name !== name)
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
    const keepOnlyOneItemById2 = id => {
        setElements(oldValues => {
            return oldValues.filter(data => data.id == id)
        })
    }

    const deleteByValue = (value) => {
        setElements(oldValues => {
            return oldValues.filter(data => data !== value)
        })
    }

    // if (deleteByValue(elements[0].name)!==null) {} // IF NAME ALREADY EXIST


    const newButton =
        <button
            onClick={() => {
                if (elements !== "") {
                    setElements(prevElements => [
                        ...prevElements,
                        { id: nanoid() },
                        { name: "How" },
                    ])
                }
            }
            }

        >
            How
        </button>

    const newButton2 =
        <button
            onClick={() => setElements(prevElements => [
                ...prevElements,
                { id: nanoid() },
                { name: "your" },
            ])}
        >
            your
        </button>

    const newButton3 =
        <button
            onClick={() => setElements(prevElements => [
                ...prevElements,
                { id: nanoid() },
                { name: "was" },
            ])}
        >
            was
        </button>

    const newButton4 =
        <button
            onClick={() => setElements(prevElements => [
                ...prevElements,
                { id: nanoid() },
                { name: "day" },
            ])}
        >
            day
        </button>

    function forEachKey() {
        for (let i = 0; i < elements.length; i++) {
            if (i % 6 == 0) {
                console.log(elements[i].name);
            }

        }
    }

    const names = Object.keys(elements)
    const entries = Object.entries(elements)
    const values = Object.values(elements)
    const values1 = Object.values(elements)[1]
    const values3 = Object.values(elements)[3]
    const values5 = Object.values(elements)[5]
    const values7 = Object.values(elements)[7]
    const values9 = Object.values(elements)[9]
    // const entries1 = Object.entries(elements)[1][1]
    // const name1 = entries[1][1]
    // const valueNames = values[1]

    // let confirmation = console.log("CLICK")
    // if(values1!=="How"){
    //     console.log("correct!")
    // }

    const button5 =
        <button
            // onClick={() => console.log(forEachKey())}
            // onClick={() => console.log(values1.name)}

            onClick={(e) => {
                window.location.reload();
                // console.log(values1.name)
                // console.log(values3.name)
                // console.log(values5.name)
                // console.log(values7.name)
                // console.log(values9.name)

                let confirm = []
                if (elements.length>1 && values1.name === "How") {
                    // console.log("How!")
                    confirm.push("How!")
                } if (elements.length>3 && values3.name === "was" && values1.name !== null) {
                    // console.log("was!")
                    confirm.push("was!")
                } if (elements.length>5 && values5.name === "your" && values1.name !== null) {
                    // console.log("your!")
                    confirm.push("your!")
                } if (elements.length>7 && values7.name === "day" && values1.name !== null) {
                    // console.log("day!")
                    confirm.push("day!")
                } 
                if (elements.length<2 || elements.length>8){
                    confirm.push("Wrong number of words")
                }
                console.log(confirm)
                console.log(elements.length)
                if(confirm.length==4){
                    alert("Answer is correct!")
                } else {
                    alert("Wrong answer!")
                }
            }
            }
        >
            console log
        </button>

    function toggleShown() {
        setElements(prevShown => !prevShown)
    }



    return (
        <div className='container1'>
            <h2>Write in English:</h2>

            <div className='container2'>
                {/* <h2>Container 3</h2> */}
                {newButton}
                {newButton2}
                {newButton3}
                {newButton4}
            </div>

            <div className='container3'>
                {/* <h2>Container 4</h2> */}
                {
                    elements.map((element, index) =>
                        <div
                            className='answer-buttons'
                            key={index} // id={element.id}
                            onClick={() => deleteByName(element.name)} // onClick={() => deleteById2(element.id)}
                        >
                            {/* {element.id} */} {element.name}
                        </div>
                    )}
            </div>
            {button5}
        </div>
    )
}

// if element is exist by id or name
    // do not create more

// how to check results?

// How to enable voice reading?