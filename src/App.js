
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CategoriesAndSearch from './pages/CategoriesAndSearch';
import Worker from './pages/Worker';
import Legal from './pages/Legal'
import Page404 from './pages/Page404';

function App() {
  // STATE
  const [display, setDisplay] = useState('mobile');

  useEffect(() => {

    if (window.innerWidth > 991) {
      setDisplay('desktop');
    }else if(window.innerWidth < 576){
      setDisplay('mobile');
    }else{
      setDisplay('tablet');
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 991) {
        setDisplay('desktop');
      }else if(window.innerWidth < 576) {
        setDisplay('mobile');
      }else{
        setDisplay('tablet');
      }
    });
  }, [display]);

  return (
    <div className="App">
      <Header display={display} />
      <main>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/:searchMethod/:stringFilter" element={ <CategoriesAndSearch/> }></Route>
          <Route path="/artisan/:id/:workerName" element={ <Worker/> }></Route>
          <Route path="/legal/:pageName" element={ <Legal/> }></Route>
          <Route path="*" element={ <Page404/> }></Route>
        </Routes>
      </main>
      <Footer display={display} />
    </div>
  );
}

export default App;
