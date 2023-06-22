import React from "react"

// https://scrimba.com/learn/learnreact/form-inputs-practice-co5014a2691f7e17ada7501af
// export default function Form() {
//     const [firstName, setFirstName] = React.useState("")

//     function handleChange(event) {
//         // console.log(event)
//         console.log(event.target)
//         console.log(event.target.value)
//     }

//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//             />
//         </form>
//     )
// }

// https://scrimba.com/learn/learnreact/forms-state-object-co4014fe8a23d6c6d376747ca
export default function Form() {
    const [formData, setFormData] = React.useState(
        { firstName: "", lastName: "" }
    )

    console.log(formData)

    function handleChange(event) {
                // console.log(event)
                // console.log(event.target)
                // console.log(event.target.value)
                // console.log(event.target.name)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}