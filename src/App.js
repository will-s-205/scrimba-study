import './App.scss';
import MainComponent from './components/MainContent'
import Navbar from './components/Navbar'

export default function App() {

  return (
    <div className="container">
      <Navbar />
      <MainComponent />
    </div>
  )
}