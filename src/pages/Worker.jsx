import { useParams } from "react-router-dom";
import datasWorkers from '../datas/datas-workers.json';

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StarRate from "../components/StarRate";
import TitleH2 from "../components/TitleH2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Worker({topWorkers}) {
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
    // Set the good medal
    let place = 1;
    let altMedal = "Icone d'une médaile";
    if( worker.top === true ){
      place = topWorkers.indexOf(worker)+1;
      if (place === 1){ altMedal="Médaille d'or, le meilleur artisan du mois" }
      else if (place === 2){ altMedal="Médaille d'argent, le deuxième artisan du mois" }
      else if (place === 3){ altMedal="Médaille de bronze, le troisième artisan du mois" }
    }
        
    // RENDER
    return (
      <div className="workerProfil container py-5">

        <section id="fiche" className="d-flex justify-content-between flex-column flex-sm-row">
          <div id="profil" className="text-center col-7">
            <div className="position-relative d-inline-block">
              <img
                src={imageURL}
                alt={alt} 
                className="rounded-4 m-auto w-auto"
                width="150"
                height="150"
              />
              {!!worker.top && (
                <img
                  className="medal position-absolute bottom-0 end-0"
                  src={"/images/medal"+place+".png"}
                  alt={altMedal}
                  width="40"
                  height="40"
                />
              )}
            </div>
            <h1 className="pb-1">{worker.name}</h1>
            <div className="d-flex justify-content-center justify-content-sm-start">
              <StarRate rate={worker.note} />
              <strong className="text-secondary ms-2">{worker.note}/5</strong>
            </div>
          </div>
          <div id="details" className="col-5">
            <div id="infos" className="d-flex justify-content-between align-items-center border border-dark border-2 border-end-0 border-start-0 py-3 fs-4">
              <strong className="text-dark speciality">{worker.specialty}</strong>
              <span><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" className="me-2 text-primary" /> {worker.location}</span>
            </div>
            <div id="links">
              <a href="#contactForm" >
                <Button className="rounded-5 w-100 fw-bold mt-3">
                  Contacter l'artisan <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" className="ms-2" />
                </Button>
              </a>
              {!!worker.website && (
                <a href={worker.website} target="_blank" rel="noreferrer">
                  <Button className="secondaryButton rounded-5 w-100 fw-bold bg-white border border-primary text-primary mt-3">
                    Voir le site internet <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" className="ms-2" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </section>

        <section id="about">
          <TitleH2 colorDivider="primary" content={"A propos de " + worker.name} />
          <p>{worker.about}</p>
        </section>

        <section id="contactForm">
          <TitleH2 colorDivider="success" content={"Contacter " + worker.name} />
          <Form>
            <Row>
              <Col sm="12" md="6" className="mt-4">
                <Form.Group controlId="formName">
                  <Form.Label>
                    Nom <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    className="bg-light border border-primary rounded-5"
                    type="text"
                    placeholder="Entrez votre nom"
                  />
                </Form.Group>
              </Col>
              <Col sm="12" md="6" className="mt-4">
                <Form.Group controlId="formSubject">
                  <Form.Label>
                    Objet <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    className="bg-light border border-primary rounded-5"
                    type="text"
                    placeholder="Entrez le sujet de votre demande"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage" className="mt-4">
              <Form.Label>
                Message <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                className="bg-light border border-primary rounded-4 formMessage"
                as="textarea"
                placeholder="Entrez votre message"
              />
            </Form.Group>
            <div className="d-flex justify-content-center justify-content-sm-end">
              <Button variant="primary" type="submit" className="mt-4 rounded-5 px-5">
                Demander un devis
              </Button>
            </div>
          </Form>
        </section>
          
      </div>
    );
  }
  
  export default Worker;
  