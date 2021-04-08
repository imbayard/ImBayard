import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <Projects />
    </div>
  );
}

export default App;
