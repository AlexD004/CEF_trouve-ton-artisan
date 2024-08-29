import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CardsList({
  dataCards,
  textAlign,
  gutterBetweenCards,
  col,
  cardStyle,
  displayId,
  buttonStyle,
  buttonText
}) {
  // RENDER
  return (
    <div className={"container " + textAlign}>
      <div className={"row " + gutterBetweenCards}>
        {dataCards.map((dataCard) => {
          return (
            <div className={"card-group d-flex justify-content-center " + col}  key={dataCard.id}>
              <Card
                className={
                  cardStyle +
                  " " +
                  (!!dataCard.imageURL === false && "pt-5")
                }
              >
                {!!dataCard.imageURL && (
                  <Card.Img
                    variant="top"
                    src={dataCard.imageURL}
                    alt={dataCard.alt}
                  />
                )}
                <Card.Body>
                  {!!dataCard.icon && (
                    <p className="iconCard iconColor text-primary">
                      {dataCard.icon}
                    </p>
                  )}
                  <Card.Title className="d-flex align-items-start">
                    {displayId && (
                        <span className="stepNumber text-primary lh-1 me-2">{dataCard.id}</span>
                    )}
                    <h3 className="text-secondary fw-bold lh-1">{dataCard.title}</h3>
                  </Card.Title>
                  <Card.Text className="">{dataCard.content}</Card.Text>
                  {!!dataCard.buttonLink && (
                    <Card.Link href={dataCard.buttonLink}>
                      <Button className={buttonStyle}>{buttonText}</Button>
                    </Card.Link>
                  )}
                </Card.Body>
                {!!dataCard.infoPlus && (
                  <p className="m-0 py-2 bg-darker border-top border-secondary rounded-bottom ">
                    {dataCard.infoPlus}
                  </p>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
