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

// FORM INPUT FIELD https://scrimba.com/learn/learnreact/form-state-object-practice-cob444ddabb8e498d051b98cb
// FORM TEXTAREA https://scrimba.com/learn/learnreact/forms-in-react-textarea-cob6a41f7a22250f5f9bdf71e
// FORM CHECKBOX https://scrimba.com/learn/learnreact/forms-in-react-checkbox-co6da4637a27cca33be7cb1d7
// FORM RADIO BUTTON https://scrimba.com/learn/learnreact/forms-in-react-radio-buttons-co14c423dbc2026a7a2b997a2
// FORM SELECT BOX https://scrimba.com/learn/learnreact/forms-in-react-select-option-co83b466d859cf1d6c4b3efaf
// FORM SUBMIT https://scrimba.com/learn/learnreact/forms-in-react-submitting-the-form-coe43436db60b0c21a1cca067


export default function Form() {
    const [formData, setFormData] = React.useState(
        { firstName: "", lastName: "", email: "", comments: "" }
    )

    // console.log(formData)
    // console.log(formData.employment)
    // console.log(formData.favColor)

    function handleChange(event) {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.name)
        // console.log(event.target.value)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    function handleSubmit(event) {
        event.preventDefault() // to prevent webpage from refreshing on submit
        // submitToApi(formData) // backend function here
        console.log(formData) // returns gathered information to console in a form of an object
    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <br />
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <br />
            <br />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <br />
            <br />
            <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <br />
            <br />
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}