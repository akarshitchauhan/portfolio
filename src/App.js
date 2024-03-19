import './App.css';
import About from './components/About';
import Connect from './components/Connect';
import Info from './components/Info';
import Last from './components/Last';
import Projects from './components/Projects';
import TechStack from './components/TechStack';


function App() {
  return (
    <div>
      <Info />
      <About />
      <TechStack />
      <Projects />
      <Connect />
      <Last />
    </div>
  );
}

export default App;
