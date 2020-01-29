import React, { useEffect } from 'react'
import Results from './Results'
//import News from './News'
import axios from 'axios'
//import { Route, Link } from "react-router-dom";
import ButtonSidebar from './ButtonSidebar';

function Main(props) {
    //console.log(props.name)

    // Results for the API call passed down from App.js
    const yelpResults = (props.results)
    console.log('yelp results', yelpResults)
    const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&sort_by=review_count&categories=food&term=$`

    // The function for when my sidebar buttoins are clicked it'll render the category wthin my button
    const handleClick = async (e) => {
        e.preventDefault()
        const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        let response = await axios.get(
              `${yelpAPI}${e.target.value}`,
              config
          ) 
        props.changeResults(response.data.businesses)
    }

    // The initial results to render to display once the app is opened
    const initialResults = async () => {
    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let res = await axios.get(
        `${yelpAPI}italian`,
        config
    )
    props.changeResults(res.data.businesses)
    }

    // Runs the first time the page is loaded
    useEffect(() => {
        initialResults()
    }, [])

    console.log(`Results from Main.js: `)
    console.log(props.name)

    return (
        <div className="main-div">

            <div className="buttons-sidebar">
                <ButtonSidebar click={handleClick}/>
            </div>

            <div className="results-to-display">
                <Results yelpResults={yelpResults}  userSearched={props.name}/>   
            </div>

        </div>
    )
}

export default Main