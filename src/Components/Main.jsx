import React, { useState } from 'react'
import Results from './Results'
//import News from './News'
import axios from 'axios'

function Main(props) {
    const [yelpSuggestions, setYelpSuggestions] = useState([])
    
    const yelpResults = (props.results)
    const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&categories=food&term=`

    let resultsToDisplay

      const handleClick = async (e) => {
        e.preventDefault()
        const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } };
        let response = await axios.get(
              `${yelpAPI}${e.target.value}`,
              config
          ) 
        setYelpSuggestions(response.data.businesses)
      }

   if (yelpSuggestions !== undefined) {
    resultsToDisplay = yelpSuggestions.map((item) => {
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
        <div className="main-div">

            <button onClick={handleClick} value='pizza'> Pizza </button>
            <button onClick={handleClick} value='burger'> Burger </button>

            <div className="results-to-display">
                {resultsToDisplay}
            </div>

            <Results searchedRes={yelpResults} />
            {/* <News /> */}

        </div>
    )
}

export default Main