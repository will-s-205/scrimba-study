import { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid"

export default function LocalStorageCreateRecord() {
    const [records, setRecord] = useState(
        () => JSON.parse(localStorage.getItem("records")) || []
    );

    useEffect(() => {
        console.log(records)
        // console.log("useEffect")
        localStorage.setItem("records", JSON.stringify(records))
    }, [])

    function createNewRecord() {
        const newRecord = {
            id: nanoid(),
            body: "text of the record"
        }
        setRecord(prevRecords => [newRecord, ...prevRecords])
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(records)
        // submitToApi(records) // send it to localStore instead
        localStorage.setItem(JSON.stringify(records.id), records.body)

    }

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

    // console.log(records)
    return (
        <form
            onSubmit={handleSubmit}
        >
            <button>Create new record</button>
            <textarea
                // name="id"
                name="body"
                // value={records.id}
                value={records.body}
                onChange={handleChange}
                placeholder="type here"
            ></textarea>
        </form>
    )
}
