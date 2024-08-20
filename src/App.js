import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CategoriesAndSearch from './pages/CategoriesAndSearch';
import Worker from './pages/Worker';
import Standard from './pages/Standard';
import Page404 from './pages/Page404';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faHouse}/>
      <Header/>
      <Home/>
      <CategoriesAndSearch/>
      <Worker/>
      <Standard/>
      <Page404/>
      <Footer/>
    </div>
  );
}

export default App;
