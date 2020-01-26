import React from 'react'
import Reviews from './Reviews'
import BusinessDetails from './BusinessDetails'

function Results(props) {
  const results = (props.searchedRes.data && props.searchedRes.data.businesses)
  let resultsToDisplay

  if (results !== undefined) {
    resultsToDisplay = results.map((item) => {
      return (

          <div className="individual-results-div" key={item.id}> 
              <h3 > {item.name} </h3>    
              <img className="results-img" src={item.image_url} alt='' />
              <p>{ item.location.display_address[0]}</p>
              <p>{ item.location.display_address[1]}</p> 
          </div>
      )
  })
  }


    return (
      <div className="results-div">

        {/* <h1> Results Component </h1> */}
        <div className="results-to-display">
          {resultsToDisplay}
        </div>

        <BusinessDetails />
        <Reviews />

      </div>
    )
  }
  
  export default Results