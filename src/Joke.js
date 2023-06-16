import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.question && <h3>Question: {props.question}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}