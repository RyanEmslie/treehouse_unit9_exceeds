import React from "react";
import Results from "./Results";
import NoResults from "./NoResults";

// import '../index.css';

const ResultsList = props => {
  const results = props.data;
  let pics;

  if (results.length > 0) {
    pics = results.map(pic => <Results url={pic.url_s} />);
  } else {
    pics = <NoResults />;
  }

  return (
    <div className="photo-container">
      <ul>{pics}</ul>
    </div>
  );
};

export default ResultsList;
