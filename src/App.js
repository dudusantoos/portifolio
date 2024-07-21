import './App.css';
import Navbar from './componentes/section/Navbar.js';
import Presentation from './componentes/section/Presentation.js';
import Projects from './componentes/section/Projects.js';
import Skills from './componentes/section/Skills.js';
import Footer from './componentes/section/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar/>
        <Presentation/>
        <Skills/>
        <Projects/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
