import React from 'react'
import Reviews from './Reviews'
import BusinessDetails from './BusinessDetails'

function Results(props) {
  const results = (props.searchedRes.data && props.searchedRes.data.businesses)
  //console.log(results)
  let resultsToDisplay

  if (results !== undefined) {
    console.log(results)
    resultsToDisplay = results.map((item) => {
      return (

          <div className="individual-results-div" key={item.id}>

            <div >  
              <h1 > {item.name} </h1>    
              <img className="results-img" src={item.image_url} alt='' /> 
            </div>  
              
          </div>
      )
  })
  }



    return (
      <div className="results-div">

        <h1> Results Component </h1>

        {resultsToDisplay}

        <BusinessDetails />
        <Reviews />

      </div>
    )
  }
  
  export default Results