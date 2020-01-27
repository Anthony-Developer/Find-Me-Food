import React from 'react'
import Results from './Results'
//import News from './News'
//import axios from 'axios'

function Main(props) {
    //console.log(props.results)
   const yelpResults = (props.results)

    return (
        <div className="main-div">


            <Results searchedRes={yelpResults} />
            {/* <News /> */}

        </div>
    )
}

export default Main