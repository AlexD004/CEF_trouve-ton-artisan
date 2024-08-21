import TitleH2 from "../components/TitleH2";
import CardsList from "../components/CardsList";

import datasSteps from '../datas/datas-steps.json';

function Home() {
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
          cardStyle= "border border-secondary border-2 rounded-5 p-2"
        />
        </section>
        <section id="bestsWorkers">
          <TitleH2 colorDivider="success" content="Les artisans du mois" />
        </section>

    </div>
  );
}

export default Home;
