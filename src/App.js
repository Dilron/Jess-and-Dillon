import React from 'react';
import Nav from './components/Nav/nav'
import Contact from './components/Nav/contact'
import Home from './components/Home/home'
import './sass/App.scss';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
