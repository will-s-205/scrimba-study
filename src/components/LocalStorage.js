import { useEffect } from "react";
import { useState } from "react";
import {nanoid} from "nanoid"

export default function Navbar() {
    const[records, setRecord] = useState(
        () => JSON.parse(localStorage.getItem("records")) || []
        );

    const [currentRecordId, setCurrentRecordId] = useState(
        (records[0] && records[0].id) || ""
    )

    useEffect(()=> {
        console.log(records)
        localStorage.setItem("records", JSON.stringify(records))
    }, [records])

    function createNewRecord() {
        const newRecord = {
            id: nanoid(),
            body: "text of the record"
        }
        setRecord(prevRecords => [newRecord, ...prevRecords])
        setCurrentRecordId(newRecord.id)
    }

    function getSizeOfStorage() {
        console.log(localStorage.length)
    }

    return (
        <div>
            <h1>localStorage work</h1>

            <button onClick={createNewRecord}>Create new record</button>
            <button onClick={getSizeOfStorage}>Size of the local storage</button>
        </div>
    )
}
