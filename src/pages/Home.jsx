import TitleH2 from "../components/TitleH2";
import CardsList from "../components/CardsList";
import CardsWorker from "../components/CardsWorker";

import datasSteps from '../datas/datas-steps.json';
import datasWorkers from '../datas/datas-workers.json';

function Home({topWorkers}) {
  // STATES
  // RENDER
  return (
    <div className="Home container">
        <h1>Comment trouver mon artisan ?</h1>
        <section id="stepsProcess">
          <TitleH2 colorDivider="primary" content="4 étapes pour contacter un professionnel" />
          <CardsList
            dataCards={ datasSteps } 
            textAlign= "text-left" 
            gutterBetweenCards= "g-2" 
            col= "col-sm-12 col-md-6 col-lg-3" 
            cardStyle= "border border-secondary border-2 rounded-4 p-2"
            displayId= {true}
          />
        </section>
        <section id="bestsWorkers" className="pb-4">
          <TitleH2 colorDivider="success" content="Les artisans du mois" />
          <CardsWorker
            dataCards={ datasWorkers } // Required : get workers infos
            topWorkers={ topWorkers } // Required : get top workers to display medals
            top={true} // Required : display all workers or only top3
            dataFiltered='' // Option : filtered list of workers
            textAlign= "text-left" 
            gutterBetweenCards= "g-2" 
            col= "col-sm-12 col-md-6 col-lg-4" 
            cardStyle= "bg-light rounded-4 py-4 px-2"
            buttonStyle= "rounded-5 w-100 fw-bold"
          />
        </section>

    </div>
  );
}

export default Home;
