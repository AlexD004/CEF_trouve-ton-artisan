
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CategoriesAndSearch from './pages/CategoriesAndSearch';
import Worker from './pages/Worker';
import Legal from './pages/Legal'
import Page404 from './pages/Page404';

import datasWorkers from './datas/datas-workers.json';

function App() {
  // STATE

  // Define display'type'
  // 'Mobile' by default
  const [display, setDisplay] = useState('mobile');

  useEffect(() => {

    // Define when charged
    if (window.innerWidth > 991) {
      setDisplay('desktop');
    }else if(window.innerWidth < 576){
      setDisplay('mobile');
    }else{
      setDisplay('tablet');
    }
    // Defin when resized
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

  // Filter TOP Workers
  // And sort by note
  let topWorkers = [];
  for (let i=0; i < datasWorkers.length; i++) {
    if (datasWorkers[i].top === true){
      topWorkers = [...topWorkers, datasWorkers[i]];
      topWorkers.sort((a,b) => (a.note > b.note ) ? -1 : 1 );
    }
  }

  return (
    <div className="App">
      <Header display={display} />
      <main>
        <Routes>
          <Route path="/" element={ <Home topWorkers={topWorkers} /> }></Route>
          <Route path="/categorie/:searchTerm" element={ <CategoriesAndSearch topWorkers={topWorkers} mode="categorie"/> }></Route>
          <Route path="/recherche/:searchTerm" element={ <CategoriesAndSearch topWorkers={topWorkers} mode="recherche"/> }></Route>
          <Route path="/artisan/:id/:workerName" element={ <Worker topWorkers={topWorkers} /> }></Route>
          <Route path="/:pageName" element={ <Legal/> }></Route>
          <Route path="*" element={ <Page404/> }></Route>
        </Routes>
      </main>
      <Footer display={display} />
    </div>
  );
}

export default App;
