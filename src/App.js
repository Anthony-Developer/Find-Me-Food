import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Recipes from './Components/Recipes'
import News from './Components/News'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'


function App() {
  const [yelpResults, setYelpResults] = useState([])
  const [receipeRes, setReseipeRes] = useState([])
  const [userSearched, setUserSearched] = useState('')
  const [userLocation, setUserLocation] = useState('')
  const [locationValue, setLocationValue] = useState('Nyc')
  const [value, setValue] = useState('Pizza')

  // All my API URLs
  const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${locationValue}&sort_by=review_count&term=${value}`
  const yelpLocationAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${locationValue}`
  const recipesAPI = `https://api.edamam.com/search?q=${value}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}&from=0&to=10`

  // The text from Food search bar
  const handleChange = (e) => {
    let textInput = e.target.value
    let newValue = textInput.charAt(0).toUpperCase() + textInput.slice(1)
    setValue(newValue)
  }

  // The text from Location search bar
  const handleLocationChange = (e) => {
    let location = (e.target.value)
    let newLocation = location.charAt(0).toUpperCase() + location.slice(1)
    setLocationValue(newLocation)
  }

  // When the Food search button is clicked this will trigger API call to run
  const handleClick = (e) => {
    e.preventDefault()
    setUserSearched(value)
    handleRequest()
    //recipeResults()
  }

  // When the Location search button is clicked this will trigger API call to run
  const handleLocationClick = (e) => {
    e.preventDefault()
    setUserLocation(locationValue)
    handleLocationRequest()
  }

  // Calling Yelp Food API 
  const handleRequest = async () => {
    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let response = await axios.get(
      yelpAPI,
      config
    )
    setYelpResults(response.data.businesses)
  }

  // Calling Yelp Location API
  const handleLocationRequest = async () => {
    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let response = await axios.get(
      yelpLocationAPI,
      config
    )
    setYelpResults(response.data.businesses)
  }

  // Calling Recipes API
  const recipeResults = async () => {
    let res = await axios.get(
      recipesAPI
    )
    setReseipeRes(res.data.hits)
  }

  // These two functions will run once at startup 
  useEffect(() => {
    handleRequest()
    // recipeResults()
  }, [])

  return (

    <Router>
      <div className="App">

        <Header value={value} textInput={handleChange} location={handleLocationChange} buttonClick={handleClick} buttonLocationClick={handleLocationClick}/>

        <Route
          exact
          path='/'>
          <Main results={yelpResults} changeResults={setYelpResults} name={value} />
        </Route>



        <Route
          path='/news'
          component={() => <News />}
        />

        <Route
          exact
          path='/recipes'
          component={() => <Recipes currentRecipes={receipeRes} recipeName={value} />}
        />

        <Footer />

      </div>
    </Router>

  )
}

export default App