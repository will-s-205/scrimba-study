// MAKING API CALLS https://scrimba.com/learn/learnreact/making-api-calls-co9544abfb8036eb9ac767bb2
import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     * 2. How will the useEffect be different if I use 
     *    setStarWarsData() instead of console.log()
     */
    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => console.log(data))
            // .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


