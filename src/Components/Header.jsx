import React from 'react'
import Search from './Search'
import Nav from './Nav'

function Header() {
    return (
      <div className="header-container">

        <h1 className="header-title"> Find me Food! </h1>
        
        <div className="header-elements">
            <Search />
            <Nav />
        </div>

      </div>
    )
  }
  
  export default Header