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
import Admin from './component/backend/Admin';
import Panel from './component/backend/panel/Panel'
import Demolist from './component/backend/panel/tabs/Demolist';
import UserData from './component/backend/panel/tabs/UserData'
import Pooldata from './component/backend/panel/tabs/Pooldata'

function App() {
  return (
   <>
    
    <BrowserRouter>
    <Header/>
          <Routes>
            <Route  path="/" element={<About />}></Route>
            <Route  path="/admin" element={<Admin />}></Route>
            <Route  path="/panel" element={<Panel />}></Route>
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
            <Route  path="/demolist" element={<Demolist />}></Route>
            <Route  path="/userdata" element={<UserData />}></Route>
            <Route  path="/pooldata" element={<Pooldata />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
   </>
  );
}

export default App;
