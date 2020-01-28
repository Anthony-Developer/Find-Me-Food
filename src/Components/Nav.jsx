import React from 'react'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Nav() {
    return (
      
      // <Router>
        <div className="nav-links">
        
          <nav >
            <a className="links" href="#"> Home </a>
            <a className="links" href="#"> Restaurants </a>
            <a className="links" href="#"> Recipes </a>
            <a className="links" href="#"> News </a>
          </nav>

        </div>
      // </Router>
    )
  }
  
  export default Nav
