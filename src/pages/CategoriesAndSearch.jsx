import { useParams } from "react-router-dom";

function CategoriesAndSearch() {
    // STATES
    const { categoryName } = useParams();

    // RENDER
    return (
      <div className="CategoriesAndSearch">
          { categoryName }
      </div>
    );
  }
  
  export default CategoriesAndSearch;
  