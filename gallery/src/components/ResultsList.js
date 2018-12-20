import React from "react";
import Results from "./Results";
import NoResults from "./NoResults";


//"container component"

const ResultsList = props => {
  const results = props.data;
  let pics;
  const title = props.title;
   

  if (results.length > 0) {
    pics = results.map(pic => <Results key={pic.id} url={pic.url_s} />);
  } else {
    pics = <NoResults />;
  }
  
  return (
    <div>
      <hr />
      {(title === undefined) ? <h1> Search results for '{props.queryTitle}'</h1> : <h1>Photos {title}</h1> }      
      <div>
        <div className="photo-container">
          <ul>{pics}</ul>
        </div>
      </div>
    </div>
  );
};

export default ResultsList;
