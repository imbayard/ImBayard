import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <Projects />
      <Skills />
      <Timeline />
    </div>
  );
}

export default App;
