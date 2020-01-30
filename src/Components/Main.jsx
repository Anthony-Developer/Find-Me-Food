import React from 'react'
import Results from './Results'
import axios from 'axios'
import ButtonSidebar from './ButtonSidebar';

function Main(props) {
    const locationValue = (props.location)
    const yelpResults = (props.results)
    
    const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${locationValue}&sort_by=review_count&categories=food&term=$`

    // The function for when my sidebar buttons are clicked it'll render the category wthin my button
    const handleClick = async (e) => {
        e.preventDefault()
        const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        let response = await axios.get(
            `${yelpAPI}${e.target.value}`,
            config
        )
        props.changeResults(response.data.businesses)
    }


    return (
        <div className="main-div">

            <div className="buttons-sidebar">
                <ButtonSidebar click={handleClick} />
            </div>

            <div className="results-to-display">
                <Results yelpResults={yelpResults} userSearched={props.name} />
            </div>

        </div>
    )
}

export default Main