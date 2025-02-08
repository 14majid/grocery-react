import React from 'react';
import './App.css';
import { Navbar, Header, Product, About, Contact, Footer } from './components';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
