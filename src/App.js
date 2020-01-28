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
  const [userSearched, setUserSearched] = useState('')
  const [yelpResults, setYelpResults] = useState([])
  let value = ''
  
  const yelpAPI = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&sort_by=review_count&term=${userSearched}`

  const handleChange = (e) => {
    value = e.target.value
    //console.log(value)
  }

  console.log(value)
  console.log(userSearched)

  const handleClick = async (e) => {
    e.preventDefault()
    setUserSearched(value)
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
            path='/' 
            component={() => <Main results={yelpResults} changeResults={setYelpResults} />} 
          />

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