import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio'
import Footer from './component/Footer';
import Counter from './component/demos/Counter';
import React from 'react';
import Cryptoprise from './component/demos/Cryptoprise';
import Crud from './component/demos/crud/Create'
import Read from './component/demos/crud/Read';
import Update from './component/demos/crud/Update';
import Create from './component/demos/crud/Create';

function App() {
  return (
   <>
    
    <BrowserRouter>
    <Header/>
          <Routes>
            <Route  path="/" element={<About />}></Route>
            <Route  path="/resume" element={<Resume />}></Route>
            <Route  path="/portfolio" element={<Portfolio />}></Route>
            <Route  path="/contact" element={<Contact />}></Route>
            <Route  path="/counter" element={<Counter />}></Route>
            <Route  path="/cryptoprise" element={<Cryptoprise />}></Route>
            <Route  path="/create" element={<Create />}></Route>
            <Route  path="/read" element={<Read />}></Route>
            <Route  path="/update" element={<Update />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
   </>
  );
}

export default App;