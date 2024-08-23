function TitleH2({ colorDivider, content, showResults, refResults }) {
    return (
      <div className="h2">
          <h2 className={colorDivider}>
            {content}
            {showResults && (
            <span className="ms-2 searchResults">
              ({refResults.length} résultat{refResults.length>1 && ("s")})
            </span>
            )}
          </h2> 
      </div>
    );
  }
   
  export default TitleH2;
  