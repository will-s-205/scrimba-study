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

// https://scrimba.com/learn/learnreact/form-state-object-practice-cob444ddabb8e498d051b98cb
// FORM INPUT FIELD
// https://scrimba.com/learn/learnreact/forms-in-react-textarea-cob6a41f7a22250f5f9bdf71e
// FORM TEXTAREA
export default function Form() {
    const [formData, setFormData] = React.useState(
        { firstName: "", lastName: "", email: "", comments: "" }
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
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="comment"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            ></textarea>
        </form>
    )
}