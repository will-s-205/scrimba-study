import { useEffect } from "react"
import { useState } from "react"
import { nanoid } from "nanoid"
import { onSnapshot, addDoc } from "@firebase/firestore";
import { firstCollection } from '../../firebase'


export default function LocalStorageCreateRecord() {
    const [records, setRecord] = useState(
        // line below required to keep previous information in localstorage. 
        // to see stored info run a command in browser console "localStorage"
        // line after below one is reqired in case if localStorage is empty
        // Absence of the second line in that case will cause an error because getItem cannot return null
        () => JSON.parse(localStorage.getItem("records"))
            || []);

    // depending on useEffect app will maintain recods variable 
    // to see the effect leave console log below 
    // and commenmt/uncomment useEfect couple of times and reload the page
    console.log(records)
    useEffect(() => {
        const unsibscribe = onSnapshot(firstCollection, function (snapshot) {
            console.log("THINGS ARE CHANGING!")
            const docArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setRecord(docArr)
        })
        return unsibscribe();
    }, [records])

    // function createNewRecord() {
    //     const newRecord = {
    //         id: nanoid(),
    //         body: "text of the record"
    //     }
    //     setRecord(prevRecords => [newRecord, ...prevRecords])
    // }

    // Create a record
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

    // Insert data
    // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
    // Storage only supports storing and retrieving strings. If you want to save other data types, you have to convert them to strings.
    async function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(records) // send it to localStore instead
        const newRecordRed = await addDoc(firstCollection, records)
        localStorage.setItem(JSON.stringify(records.id), records.body)
        console.log("ID: " + records.id + " BODY: " + records.body)
    }

    async function createNewRecord() {
        const newRecord = {
            body: "# Type your markdown note's title here"
        }
        const newRecordRef = await addDoc(firstCollection, { ...newRecord })
        setRecord(newRecordRef.id)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
            <button onClick={createNewRecord}>db</button>
        </div>
    )
}
