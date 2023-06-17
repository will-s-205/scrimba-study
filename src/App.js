import './App.css';
// import Navbar from './components/Header'
// import Footer from './components/Footer'
// import MainContent from './components/MainContent'

// export default function App() {
//   return (
//     <div className="container">
//       <Navbar />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// export default function App() {
//   // const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
//   // OR
//   const colors = [
//           <h3>Red</h3>, 
//           <h3>Orange</h3>, 
//           <h3>Yellow</h3>,
//           <h3>Green</h3>,
//           <h3>Blue</h3>,
//           <h3>Indigo</h3>,
//           <h3>Violet</h3>
//       ]
//   return (
//       <div>
//           {colors}
//       </div>
//   )
// }

import Joke from "./Joke"
import JokesData from "./JokesData"

export default function App() {

  // console.log(jokesData);
  const JokeEls = JokesData.map(jokes => {
    return <Joke 
    question={jokes.question} 
    punchline={jokes.punchline}
    />
  })

  return (
    <div>
      {JokeEls}
    </div>
  )
}
