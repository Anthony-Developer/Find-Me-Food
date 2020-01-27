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
              <a href={item.url} className="business-url"><h3> {item.name} </h3></a> 
              <br></br>
              <img className="results-img" src={item.image_url} alt='' />
              <p> Rating {item.rating} </p>
              <p> Reviews {item.review_count} </p>
              <p> {item.display_phone} </p>
              <p>{ item.location.display_address[0]}</p>
              <p>{ item.location.display_address[1]}</p> 
              
          </div>
      )
  })
  }


    return (
      <div className="results-div">

        <div className="results-to-display">
          {resultsToDisplay}
        </div>

        <BusinessDetails />
        <Reviews />

      </div>
    )
  }
  
  export default Results