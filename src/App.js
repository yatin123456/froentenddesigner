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
import Shop from './component/shop/Shop';
import Stckboard from './component/demos/stckboard/Stckboard';
import Allparticipent from './component/demos/stckboard/Allparticipent'
import Cryptoitem from './component/demos/Cryptoitem';
import Estimateearnings from './component/demos/stckboard/Estimateearnings';

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
            <Route  path="/shop" element={<Shop />}></Route>
            <Route  path="/stackboard" element={<Stckboard />}></Route>
            <Route  path="/allparticipent" element={<Allparticipent />}></Route>
            <Route  path="/cryptoitem/:id" element={<Cryptoitem />}></Route>
            <Route  path="/estimateearnings" element={<Estimateearnings />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
   </>
  );
}

export default App;
