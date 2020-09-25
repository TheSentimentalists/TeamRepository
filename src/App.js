import React from 'react';
import './App.css';
import Header from './components/Header';
import URLInput from './components/URLInput';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <URLInput />
      <Footer />
    </div>
  );
}

export default App;
