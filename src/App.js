import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <Projects />
      <Timeline />
    </div>
  );
}

export default App;
