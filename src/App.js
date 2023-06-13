import './App.css';
import Navbar from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
