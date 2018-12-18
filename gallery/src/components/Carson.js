import React from "react";
import Results from "./Results";
// import NoResults from "./NoResults";

// import '../index.css';
const ResultsList = props => {
  const results = props.data;
  let pics = results.map(pic => <Results key={pic.id} url={pic.url_s} />);

  return (
    <div>
      <hr />
      <h1>Photos of our Leader!</h1>

      <div className="photo-container">
        <ul>{pics}</ul>
      </div>
    </div>
  );
};

export default ResultsList;
