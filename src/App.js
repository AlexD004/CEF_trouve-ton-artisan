import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CategoriesAndSearch from './pages/CategoriesAndSearch';
import Worker from './pages/Worker';
import Legal from './pages/Legal'
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
				<Route path="/" element={ <Home/> }></Route>
				<Route path="/categorie/:categoryName" element={ <CategoriesAndSearch/> }></Route>
				<Route path="/artisan/:workerName" element={ <Worker/> }></Route>
				<Route path="/legal/:pageName" element={ <Legal/> }></Route>
				<Route path="*" element={ <Page404/> }></Route>
			</Routes>

      <Footer/>
    </div>
  );
}

export default App;
