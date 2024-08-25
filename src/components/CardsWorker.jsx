import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import StarRate from "./StarRate";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function CardsWorker(props) {
    // STATES
    let {
      dataCards,
      dataFiltered,
      textAlign,
      gutterBetweenCards,
      col,
      cardStyle,
      buttonStyle,
      top
    } = props;

    // Filter TOP Workers
    // And sort by note
    let topWorkers = [];
    for (let i=0; i < dataCards.length; i++) {
      if (dataCards[i].top === true){
        topWorkers = [...topWorkers, dataCards[i]];
        topWorkers.sort((a,b) => (a.note > b.note ) ? -1 : 1 );
      }
    }
    // Set the list to loop ( TOP Workers or ALL )
    if( top ){
      dataCards = topWorkers;
    }
    if( dataFiltered ){
      dataCards = dataFiltered;
    }

    
  
    // RENDER
    return (
      <div className={"container " + textAlign}>
        <div className={"row " + gutterBetweenCards}>
          {dataCards.map((dataCard) => {

            // Create a clean url with worker name
            const urlName = dataCard.name.normalize("NFD").replace(/[\u0300-\u036f]|[^\w ]/g, "").replace(/ /g,"-").toLowerCase();
            // Define an avatar by default
            let imageURL = dataCard.imageURL;
            let alt = dataCard.alt;
            if ( !dataCard.imageURL ) {
              imageURL = "./images/avatars/default.png";
              alt = "Avatar par défaut, illustration d'une ville."
            }
            // Set the good medal
            let place = 1;
            let altMedal = "Icone d'une médaile";
            if( dataCard.top === true ){
              place = topWorkers.indexOf(dataCard)+1;
              if (place === 1){ altMedal="Médaille d'or, le meilleur artisan du mois" }
              else if (place === 2){ altMedal="Médaille d'argent, le deuxième artisan du mois" }
              else if (place === 3){ altMedal="Médaille de bronze, le troisième artisan du mois" }
            }

            return (
            <div className={"card-group worker justify-content-center " + col}  key={dataCard.id}>
              <a href={"/artisan/" + dataCard.id + "/" + urlName} className="card text-decoration-none">
                <Card className={ cardStyle + " position-relative" }>

                  <Card.Img
                    src={imageURL}
                    alt={alt}
                    className="rounded-4 m-auto w-auto"
                    width="150"
                    height="150"
                  />
                  {!!dataCard.top && (
                    <img
                      className="medal position-absolute top-0 end-0 me-3"
                      src={"/images/medal"+place+".png"}
                      alt={altMedal}
                      width="40"
                      height="40"
                    />
                  )}
                  <Card.Body>
                    <Card.Title className="d-flex align-items-start">
                      <h3 className="text-secondary fw-bold lh-1">{dataCard.name}</h3>
                    </Card.Title>
                    <div className="d-flex">
                      <StarRate rate={dataCard.note} />
                      <strong className="text-secondary ms-2">{dataCard.note}/5</strong>
                    </div>
                    <Card.Text className="d-flex justify-content-between align-items-center border border-dark border-2 border-end-0 border-start-0 py-2 fs-4">
                      <strong className="text-dark speciality">{dataCard.specialty}</strong>
                      <span><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" className="me-2 text-primary" /> {dataCard.location}</span>
                    </Card.Text>
                    <Button className={buttonStyle}>
                      Détails de l'artisan <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" className="ms-2" />
                    </Button>
                  </Card.Body>

                </Card>
              </a>
            </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default CardsWorker;
  