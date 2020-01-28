import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
//import { BrowserRouter as Router } from 'react-router-dom'
//import { Route } from 'react-router-dom'
import axios from 'axios'


function App() {
  const [userSearched, setUserSearched] = useState('nyc')
  const [yelpResults, setYelpResults] = useState([])
  
  const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&sort_by=review_count&term=${userSearched}`

  const handleChange = (e) => {
    let value = e.target.value;
    setUserSearched(value)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } };
    let response = await axios.get(
          yelpAPI,
          config
      ) 
    setYelpResults(response.data.businesses)
  }

  return (
    <div className="App">

      <Header textInput={handleChange} buttonClick={handleClick}/>
      <Main results={yelpResults} changeResults={setYelpResults}/>
      <Footer />
      
    </div>
  )
}

export default App
