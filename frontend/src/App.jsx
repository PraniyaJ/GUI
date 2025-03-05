import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Technology from './Components/Technology/Technology';
import About from './Components/About/About';
import Department from './Components/Department/Department';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Technology/>
      <About/>
      <Department/>
      <Services/>
      <Footer />

      
    </div>
  )
}



export default App;
