import { useParams } from "react-router-dom";
import datasWorkers from '../datas/datas-workers.json';

import Button from "react-bootstrap/Button";
import StarRate from "../components/StarRate";
import TitleH2 from "../components/TitleH2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Worker() {
    // STATES
    const { id } = useParams();
    let worker = datasWorkers.filter((dataWorker) => {
      return dataWorker.id === id;
    });
    worker = worker[0];

    // Define an avatar by default
    let imageURL = worker.imageURL;
    let alt = worker.alt;
    if ( !worker.imageURL ) {
      imageURL = "/images/avatars/default.png";
      alt = "Avatar par défaut, illustration d'une ville."
    }

    // RENDER
    return (
      <div className="worker container">

        <section id="fiche" className="d-flex pt-4 justify-content-between flex-column flex-sm-row">
          <div id="profil" className="text-center">
            <img
              src={imageURL}
              alt={alt} 
              className="rounded-4 m-auto w-auto"
              width="150"
              height="150"
            />
            <h1 className="pb-1">{worker.name}</h1>
            <div className="d-flex justify-content-center justify-content-sm-start">
              <StarRate rate={worker.note} />
              <strong className="text-secondary ms-2">{worker.note}/5</strong>
            </div>
          </div>
          <div id="details">
            <div id="infos" className="d-flex justify-content-between align-items-center border border-dark border-2 border-end-0 border-start-0 py-3 fs-4">
              <strong className="text-dark speciality">{worker.specialty}</strong>
              <span><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" className="me-2 text-primary" /> {worker.location}</span>
            </div>
            <div id="links">
              <Button className="rounded-5 w-100 fw-bold mt-3">
                Contacter l'artisan <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" className="ms-2" />
              </Button>
              <Button className="secondaryButton rounded-5 w-100 fw-bold bg-white border border-primary text-primary mt-3">
                Voir le site internet <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" className="ms-2" />
              </Button>
            </div>
          </div>
        </section>

        <section id="about">
          <TitleH2 colorDivider="primary" content={"A propos de " + worker.name} />
          <p>{worker.about}</p>
        </section>

        <section id="contactForm">
        <TitleH2 colorDivider="success" content={"Contacter " + worker.name} />
          [FORM]
        </section>
          
      </div>
    );
  }
  
  export default Worker;
  