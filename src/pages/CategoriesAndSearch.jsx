import { useParams } from "react-router-dom";

function CategoriesAndSearch() {
    // STATES
    const { categoryName } = useParams();

    // RENDER
    return (
      <div className="CategoriesAndSearch">
          <main>{ categoryName }</main>
      </div>
    );
  }
  
  export default CategoriesAndSearch;
  