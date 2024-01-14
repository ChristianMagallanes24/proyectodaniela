import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros/Nosotros';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Nosotros />
    </div>
  );
}

export default App;
