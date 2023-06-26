import React from "react"

export default function SignUpForm() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            password2: "",
            okayToEmail: false
        }
    )

    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    // console.log(formData) // DEBBUGING

    function handleChange(event) {
        // console.log(event) // DEBBUGING
        // console.log(event.target) // DEBBUGING
        // console.log(event.target.name)
        // console.log(event.target.value)
        const { name, value, type, checked } = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    // em@gmail.com
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(formData) // DEBBUGING
        if (formData.password === formData.password2) {
            console.log("Successfully signed up")
            if (formData.okayToEmail) {
                console.log("Thanks for signing up for our newsletter!")
            }
        } else {
            return console.log("Passwords do not match")
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="password2"
                    onChange={handleChange}
                    value={formData.password2}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                        name="okayToEmail"
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>

                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
