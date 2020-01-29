import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Recipes from './Components/Recipes'
import News from './Components/News'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'


function App() {
  const [userSearched, setUserSearched] = useState('Pizza')
  const [yelpResults, setYelpResults] = useState([])
  let value = ''
  let newValue
  
  const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&sort_by=review_count&term=${userSearched}`

  // The text from the search bar
  const handleChange = (e) => {
    value = e.target.value
    newValue = value.charAt(0).toUpperCase() + value.slice(1)
    //console.log(newValue)
  }

  console.log(`User searched this text: ${userSearched}`)

  // When the search button is clicked this API call will run
  const handleClick = async (e) => {
    e.preventDefault()
    setUserSearched(newValue)
    
    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`, 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    let response = await axios.get(
          yelpAPI,
          config
      ) 
    setYelpResults(response.data.businesses)
  }

  console.log(userSearched)

  return (
    
    <Router>
      <div className="App">

        <Header textInput={handleChange} buttonClick={handleClick}/>
        
          <Route 
            exact
            path='/'>
            <Main results={yelpResults} changeResults={setYelpResults} name={userSearched}/>
          </Route> 
             


          <Route 
            path='/news' 
            component={() => <News />} 
          />

          <Route 
            exact
            path='/recipes' 
            component={() => <Recipes name={userSearched} />} 
          />
        
        <Footer />
        
      </div>
    </Router>
      
   )
}

export default App