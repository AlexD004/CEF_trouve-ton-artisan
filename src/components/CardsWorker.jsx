import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function CardsWorker(props) {
    // STATES
    const {
      dataCards,
      textAlign,
      gutterBetweenCards,
      col,
      cardStyle,
      buttonStyle
    } = props;
  
    // RENDER
    return (
      <div className={"container " + textAlign}>
        <div className={"row " + gutterBetweenCards}>
          {dataCards.map((dataCard) => {

            /* Create a clean url with worker name */
            const urlName = dataCard.name.normalize("NFD").replace(/[\u0300-\u036f]|[^\w ]/g, "").replace(/ /g,"-").toLowerCase();

            return (
            <div className={"card-group worker d-flex justify-content-center " + col}  key={dataCard.id}>
              <a href={"/artisan/" + dataCard.id + "/" + urlName} className="card text-decoration-none">
              <Card
                className={
                  cardStyle +
                  " " +
                  (!!dataCard.imageURL === false && "pt-5")
                }
              >
                {!!dataCard.imageURL && (
                  <Card.Img
                    src={dataCard.imageURL}
                    alt={dataCard.alt}
                    className="
                      rounded-4
                      m-auto
                      w-auto
                    "
                    width="150"
                    height="150"
                  />
                )}
                <Card.Body>
                  <Card.Title className="d-flex align-items-start">
                    <h3 className="text-secondary fw-bold lh-1">{dataCard.name}</h3>
                  </Card.Title>
                  <Card.Text>
                    Rate <strong className="text-secondary">{dataCard.note}/5</strong>
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between align-items-center border border-dark border-2 border-end-0 border-start-0 py-2">
                    <strong className="text-dark">{dataCard.specialty}</strong>
                    <span><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" className="me-2 text-primary" /> {dataCard.location}</span>
                  </Card.Text>
                  <Button className={buttonStyle}>Détails de l'artisan <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" className="ms-2" /></Button>
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
  