import React from "react";

//rendered when Axios returns an empty array
const NoResults = props => (
  <li className="photo-container not-found">
    <h3>'Sorry, No Pictures'</h3>
  </li>
);

export default NoResults;
