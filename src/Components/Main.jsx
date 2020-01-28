import React, { useEffect } from 'react'
import Results from './Results'
//import News from './News'
import axios from 'axios'
//import { Route, Link } from "react-router-dom";
import ButtonSidebar from './ButtonSidebar';

function Main(props) {

    const yelpResults = (props.results)
    const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&sort_by=review_count&categories=food&term=`
    //const yelpAPI = `https://cors-proxy.htmldriven.com/?url=https://api.yelp.com/v3/businesses/search?location=nyc&sort_by=review_count&categories=food&term=`

    const handleClick = async (e) => {
        e.preventDefault()
        const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        let response = await axios.get(
              `${yelpAPI}${e.target.value}`,
              config
          ) 
        props.changeResults(response.data.businesses)
    }


    const initialResults = async () => {
    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let res = await axios.get(
        `${yelpAPI}burger`,
        config
    )
    props.changeResults(res.data.businesses)
    }

    useEffect(() => {
        initialResults()
    }, [])

    //console.log(props)

    return (
        <div className="main-div">

            <div className="buttons-sidebar">
                <ButtonSidebar click={handleClick}/>
            </div>

            <div className="results-to-display">
                <Results searchedRes={yelpResults} />   
            </div>

        </div>
    )
}

export default Main