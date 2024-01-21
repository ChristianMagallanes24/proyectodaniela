import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";

/* The following line can be included in your src/index.js or App.js file */
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SobreNosotros />
      <Footer />
    </div>
  );
}

export default App;
