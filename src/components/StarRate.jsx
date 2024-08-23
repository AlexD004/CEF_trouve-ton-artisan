import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function CardsWorker(props) {
    // STATES 
    const { rate } = props;

    let rateValues = rate.split('.');; // I split the note to have two parts : "full" point and "partial" point
    const fullStars = parseInt(rateValues[0], 10); // I stock full points
    const halfStar = parseInt(rateValues[1], 10); // I stock partial points

    const getStars = fullStars => {

        let rateStars = []; // New array to stock stars
        let keyNum = 1; // Because React want a key for each element list. We increment for each star & reset at end

        // FOR each "full" point, I add a new complete star
        for ( let i = 0; i < fullStars; i++ ){
            rateStars.push(<li key={keyNum} ><FontAwesomeIcon icon="fa-solid fa-star" /></li>)
            keyNum++;
            
        }
        // IF my partial point reach 5 (an "half point"), I add an half star
        if (halfStar >= 5){
            rateStars.push(<li key={keyNum} ><FontAwesomeIcon icon="fa-solid fa-star-half-stroke" /></li>)
            keyNum++;
        }
        // I count how many star miss to reach 5 stars and I add them
        const emptyStars = 5 - rateStars.length;
        for ( let i = 0; i < emptyStars; i++ ){
            rateStars.push(<li key={keyNum} ><FontAwesomeIcon icon="fa-regular fa-star" /></li>)
            keyNum++;
        }
        keyNum = 1;
        return rateStars;
        
    };
  
    // RENDER
    return (
      <ul className="starRate text-success list-unstyled d-flex">
        {getStars(fullStars)}
      </ul>
    );
  }
  
  export default CardsWorker;
  library.add(fas, far)