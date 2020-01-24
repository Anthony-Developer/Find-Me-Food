import React from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
//import { BrowserRouter as Router } from 'react-router-dom'
//import { Route } from 'react-router-dom'

console.log(process.env.REACT_APP_YELP_KEY)

function App() {
  

  return (
    <div className="App">

      <Header />
      <Main />
      <Footer />
      
    </div>
  )
}

export default App
