import React from "react";
import Results from "../Results";
import NoResults from "../NoResults";

const ResultsList = props => {
  const results = props.data;
  let pics;

  if (results.length > 0) {
    pics = results.map(pic => <Results key={pic.id} url={pic.url_s} />);
  } else {
    pics = <NoResults />;
  }

  return (
    <div>
    <hr />
    <h1>Photos of Trees!</h1>
    <div className="photo-container">
      <ul>{pics}</ul>
    </div>
    </div>
  );
};

export default ResultsList;
