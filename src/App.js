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
  const [value, setValue] = useState('pizza')

  const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&sort_by=review_count&term=${value}`
  const recipesAPI = `https://api.edamam.com/search?q=${value}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}&from=0&to=10`

  // The text from the search bar
  const handleChange = (e) => {
    let textInput = e.target.value
    let newValue = textInput.charAt(0).toUpperCase() + textInput.slice(1)
    setValue(newValue)
  }

  // When the search button is clicked this API call will run
  const handleClick = (e) => {
    e.preventDefault()
    setUserSearched(value)
    handleRequest()
    recipeResults()
  }

  const handleRequest = async () => {
    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let response = await axios.get(
      yelpAPI,
      config
    )
    setYelpResults(response.data.businesses)
  }

  const initialResults = async () => {
    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let res = await axios.get(
        yelpAPI,
        config
    )
    setYelpResults(res.data.businesses)
  }

  const recipeResults = async () => {
    let res = await axios.get(
      recipesAPI
    )
    setReseipeRes(res.data.hits)
  }

  useEffect(() => {
    initialResults()
  }, [])

  return (

    <Router>
      <div className="App">

        <Header value={value} textInput={handleChange} buttonClick={handleClick} />

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
          component={() => <Recipes userSearched={userSearched} currentRecipes={receipeRes} recipeName={value} />}
        />

        <Footer />

      </div>
    </Router>

  )
}

export default App