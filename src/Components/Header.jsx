import React from 'react'
import Search from './Search'
import Nav from './Nav'

function Header(props) {
  const textInput = (props.textInput)
  const buttonClick = (props.buttonClick)
  const locationChange = (props.location)
  const buttonLocationClick = (props.buttonLocationClick)

    return (
      <div className="header-container">

        <h1 className="header-title"> Find me Food! </h1>
        
        <div className="header-elements">
            <Search textInput={textInput} buttonClick={buttonClick} locationChange={locationChange} buttonLocationClick={buttonLocationClick}/>
            <Nav />
        </div>

      </div>
    )
}
  
  export default Header