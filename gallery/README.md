Ryan Emslie - Unit 9 Project - Full Stack Javascript
Attemping exceeds expectations


Custom CSS changes are located at the bottom of the index.css file.

The App.js component contains the Axios API calls.  My Flickr API-key is imported from a separare config.js file.  I ended up making separate Axios Get methods for Search, Trees, House, and RyanCarson photos and stored them separate states.  I know that isn't exactly D.R.Y. programming.

React-router-dom is located in APP.js
I opted to catch all of the "404" errors with a separate <Route component={NoMatch}>.  

I was having issues programatically navigating to a separate route after the search form was submitted.  I ended up using {withRouter}, based on work seen on Tyler McGinnis' website as opposed to Gil's demo.

The API is collected in the App component and then passed down to the ResultsList component
The <ResultsList> component is serving as my "container" component, mapping over the search arrays.