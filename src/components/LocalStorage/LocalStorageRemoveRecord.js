// import { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid"

export default function LocalStorageRemoveRecord() {
    const [records, setRecord] = useState(
        // line below required to keep previous information in localstorage. 
        // to see stored info run a command in browser console "localStorage"
        // line after below one is reqired in case if localStorage is empty
        // Absence of the second line in that case will cause an error because getItem cannot return null
        () => JSON.parse(localStorage.getItem("records"))
            || []);

    function handleChange(event) {
        const { name, value } = event.target
        setRecord(prevRec => {
            // console.log(event.target.name)
            return {
                ...prevRec,
                id: nanoid(),
                [name]: value,
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(records) // send it to localStore instead
        localStorage.removeItem(JSON.stringify(records.id), records.body)
        console.log("ITEM REMOVED FROM LOCAL STORE - " + records.id)
    }

    function removeFirstItem() {
        localStorage.removeItem(localStorage.key(0))
    }

    return (
        <div>
            <div className="buttonRow">
                <button onClick={removeFirstItem}>Remove first item in localStorage</button>
            </div>
            <form onSubmit={handleSubmit}>
                <button>Remove record by ID</button>
                <textarea
                    name="id"
                    value={records.id}
                    onChange={handleChange}
                    placeholder="type here"
                ></textarea>
            </form>
        </div>
    )
}
