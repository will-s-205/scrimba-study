// import { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid"

export default function LocalStorageCreateRecord() {
    const [records, setRecord] = useState(
        // line below required to keep previous information in localstorage. 
        // to see stored info run a command in browser console "localStorage"
        // line after below one is reqired in case if localStorage is empty
        // Absence of the second line in that case will cause an error because getItem cannot return null
        () => JSON.parse(localStorage.getItem("records"))
            || []);

    // useEffect(() => {
    // console.log(records) // comment records if you don't wanna see all this mess in console
    // console.log("useEffect")
    // localStorage.setItem("records", JSON.stringify(records)) // why would I need it here?
    // }, [records]) 

    // function createNewRecord() {
    //     const newRecord = {
    //         id: nanoid(),
    //         body: "text of the record"
    //     }
    //     setRecord(prevRecords => [newRecord, ...prevRecords])
    // }

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
        localStorage.setItem(JSON.stringify(records.id), records.body)
        console.log("ID: " + records.id + " BODY: " + records.body)
    }

    return (
            <form
                onSubmit={handleSubmit}
            >
                <button>Create new record</button>
                <textarea
                    // name="id"
                    name="body"
                    // value={records.id} // use nanoid instead
                    value={records.body}
                    onChange={handleChange}
                    placeholder="type here"
                ></textarea>
            </form>
    )
}
