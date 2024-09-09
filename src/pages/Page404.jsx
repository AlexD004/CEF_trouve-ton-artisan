function Page404() {
    // STATES
  
    // RENDER
    return (
      <div className="404 container text-center">
          <h1 className="pb-0">Erreur 404</h1>
          <p>Cette page n'existe pas...</p>
          <img
            src="/images/404.png"
            alt="Erreur 404, illustration d'un homme sur une échelle."
            className="img404 my-4 w-75"
          />
      </div>
    );
  }
  
  export default Page404;
  