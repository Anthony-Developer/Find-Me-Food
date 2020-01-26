import React, { useState, useEffect } from 'react'
import Results from './Results'
//import News from './News'
import axios from 'axios'

function Main() {
    const [yelpResults, setYelpResults] = useState('')

    const yelpAPI = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc'

    const getYelpResults = async () => {
        const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } };
        
        let response = await axios.get(
            yelpAPI,
            config
        ) 
        //console.log(response)
        setYelpResults(response)
    }

    //console.log(yelpResults)


    useEffect(() => {
        getYelpResults()
      }, [])
    

    return (
        <div>


            <Results searchedRes={yelpResults} />
            {/* <News /> */}

        </div>
    )
}

export default Main