import { useParams } from "react-router-dom";
import CardsWorker from "../components/CardsWorker";
import TitleH2 from "../components/TitleH2";

import datasWorkers from '../datas/datas-workers.json';

function CategoriesAndSearch() {
    // STATES
    const { searchMethod, categoryName } = useParams();
    const method = searchMethod.charAt(0).toUpperCase() + searchMethod.slice(1);
    const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    let result = datasWorkers.filter((dataWorker) => {
      return dataWorker.category.normalize('NFD').replace(/[\u0300-\u036f]|[^\w ]/g, "") === title;
    });

    // RENDER
    return (
      <div className="CategoriesAndSearch container pb-4">
        <h1>Les artisans de votre région</h1>
        <TitleH2
          colorDivider="primary"
          content={ method + " : " + title }
          showResults={true}
          refResults={ result }
        />
        <CardsWorker
          dataCards={ result } 
          textAlign= "text-left" 
          gutterBetweenCards= "g-2" 
          col= "col-sm-12 col-md-6 col-lg-4" 
          cardStyle= "bg-light rounded-4 py-4 px-2"
          buttonStyle= "rounded-5 w-100 fw-bold"
          top={false}
        />
      </div>
    );
  }
  
  export default CategoriesAndSearch;
  