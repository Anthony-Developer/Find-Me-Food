import React from 'react'

function Results(props) {

  // Results being passed down from Main.js originally form App.js
  const results = (props.yelpResults && props.yelpResults)
  let resultsToDisplay

  // Displaying the results being passed down 
  if (results !== undefined) {
    resultsToDisplay = results.map((item) => {
      
        return (

          <div className="individual-results-div" key={ item.id }> 
              <h3 className="results-title"> { item.name } </h3>
      
                <a href={ item.url } className="business-url"><img className="results-img" src={item.image_url} alt='' /></a> 
              
              <div className="results-info">
                <p className="results-descripton"> Rating { item.rating } </p>
                <p> Reviews { item.review_count } </p>
                <p> { item.display_phone } </p>
                <p> { item.location.display_address[0] } </p>
                <p className="results-descripton"> { item.location.display_address[1] } </p> 
              </div>
              
          </div>
      )
  })
  }


    return (
      <div className="results-div">

        <div className="results-to-display">
          {resultsToDisplay}
        </div>

      </div>
    )
}
  
  export default Results