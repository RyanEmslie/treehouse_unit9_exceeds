import React from 'react';
import Results from './Results'
// import '../index.css';


const ResultsList = props => {
        

        const results = props.data
        let pics = results.map(pic => 
                <Results url={pic.url_s} />);
        console.log(pics)

                
        return(
                <div className="photo-container">
                <ul>
                        {pics}
                </ul>
                </div>
        )
}



export default ResultsList;