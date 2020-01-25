import React from 'react'
import Results from './Results'
//import News from './News'
import axios from 'axios'

function Main() {
    const yelpAPI = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc'

    console.log(process.env.REACT_APP_YELP_KEY)

    const getYelpResults = async () => {
        const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } };
        
        axios.get(
            yelpAPI,
            config
        ) .then(res => {
            console.log(res)
        }) .catch(err => console.log(err))
    }


    // const getYelpRes = async () => {
    //         axios.get( 
    //             yelpAPI, {
    //             headers: {
    //                     Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
    //                 },
    //             params: {
    //                     location: 'bronx',
    //                     categories: 'breakfast_brunch',
    //                 }
    //             .then((res) => {
    //             console.log(res)
    //             })
    //             .catch((err) => {
    //             console.log ('error')
    //             })
    //          }
    //     }

    getYelpResults()

    return (
        <div>


            <Results />
            {/* <News /> */}

        </div>
    )
}

export default Main