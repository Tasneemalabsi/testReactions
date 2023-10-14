import React from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cars from './cars';
import Cart from './cart';


function App() {
  return (
    <>

    <Header />

    <Router>
      <Routes>
          <Route  exact path="/" Component={Main} />
          <Route  exact path="/cars" Component={Cars} />
          <Route  exact path="/cart" Component={Cart} />
          
      </Routes>
    </Router>

    <Footer />
    
     
    </>
  );
}

export default App;