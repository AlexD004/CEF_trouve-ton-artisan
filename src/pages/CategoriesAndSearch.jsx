import { useParams } from "react-router-dom";
import CardsWorker from "../components/CardsWorker";
import TitleH2 from "../components/TitleH2";

import datasWorkers from '../datas/datas-workers.json';

function CategoriesAndSearch() {
    // STATES
    const { searchMethod, stringFilter } = useParams();
    const title = stringFilter.charAt(0).toUpperCase() + stringFilter.slice(1);

    let result = [];
    if(searchMethod === "categorie"){
        result = datasWorkers.filter((dataWorker) => {
        return dataWorker.category.normalize('NFD').replace(/[\u0300-\u036f]|[^\w ]/g, "") === title;
      });
    }else if(searchMethod === "recherche"){
      result = datasWorkers.filter((dataWorker) => {
        return (
          dataWorker.name.normalize('NFD').replace(/[\u0300-\u036f]|[^\w ]/g, "").toLowerCase().includes(title.toLocaleLowerCase())
          ||
          dataWorker.location.normalize('NFD').replace(/[\u0300-\u036f]|[^\w ]/g, "").toLowerCase().includes(title.toLocaleLowerCase())
          ||
          dataWorker.specialty.normalize('NFD').replace(/[\u0300-\u036f]|[^\w ]/g, "").toLowerCase().includes(title.toLocaleLowerCase())
        );
      });
    }


    // RENDER
    return (
      <div className="CategoriesAndSearch container pb-4">
        <h1>Les artisans de votre région</h1>
        <TitleH2
          colorDivider="primary"
          content={ title }
          showResults={true}
          refResults={ result }
        />
        { result.length === 0 ?
          <div className="text-center fw-bold fs-3 py-4 border border-1 rounded-2 shadow-sm">
            Désolé, nous ne trouvons aucun artisan correspondant à cette recherche...
          </div>
          :
          <CardsWorker
            dataCards={ datasWorkers } 
            dataFiltered={ result }
            textAlign= "text-left" 
            gutterBetweenCards= "g-2" 
            col= "col-sm-12 col-md-6 col-lg-4" 
            cardStyle= "bg-light rounded-4 py-4 px-2"
            buttonStyle= "rounded-5 w-100 fw-bold"
            top={false}
          />
        }
      </div>
    );
  }
  
  export default CategoriesAndSearch;
  