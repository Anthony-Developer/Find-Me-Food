import React from 'react'
import Search from './Search'
import Nav from './Nav'

function Header(props) {
  const textInput = (props.textInput)
  const buttonClick = (props.buttonClick)
  const locationChange = (props.location)
  const buttonLocationClick = (props.buttonLocationClick)
  const hideSearch = (props.hideSearch)
  const showSearch = (props.showSearch)

  let renderSearch
  
    if (props.news === false) {
      renderSearch = <Search textInput={textInput} buttonClick={buttonClick} locationChange={locationChange} buttonLocationClick={buttonLocationClick}/>
    }
  
  

    return (
      <div className="header-container">

        <h1 className="header-title"> Find me Food! </h1>
        
        <div className="header-elements">
            {renderSearch}
            <Nav hideSearch={hideSearch} showSearch={showSearch}/>
        </div>

      </div>
    )
}
  
  export default Header