import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './Header';
import Skills from './components/Skills';
import AnimatedSection from './AnimatedSection';
import './App.css'
const App = () => (
  <>
  <AnimatedSection>
  <div>
    <Header />
    <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  </div>
  </AnimatedSection>
  </>
);

export default App;

