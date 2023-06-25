import { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid"

export default function CreateRecord() {
    const [records, setRecord] = useState(
        () => JSON.parse(localStorage.getItem("records")) || []
    );

    useEffect(() => {
        // console.log(records)
        console.log("useEffect")
        localStorage.setItem("records", JSON.stringify(records))
    }, [records])

    function createNewRecord() {
        const newRecord = {
            id: nanoid(),
            body: "text of the record"
        }
        setRecord(prevRecords => [newRecord, ...prevRecords])
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        // console.log(records)
        console.log("handleSubmit")
    }

    console.log(records)
    return (
        <div>
            <h1>localStorage work</h1>
            <form
                onSubmit={handleSubmit}
            >
                <button
                    onClick={createNewRecord}
                >Create new record</button>
                <textarea
                value={records.body}
                // onChange={handleChange}
                name="body"
                placeholder="type here"
                ></textarea>
            </form>
        </div>
    )
}
