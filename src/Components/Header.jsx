import React from 'react'
import Search from './Search'
import Nav from './Nav'

function Header(props) {
  //console.log(props)
  const handleChange = (props.textInput)
  const button = (props.buttonClick)

    return (
      <div className="header-container">

        <h1 className="header-title"> Find me Food! </h1>
        
        <div className="header-elements">
            <Search search={handleChange} click={button}/>
            <Nav />
        </div>

      </div>
    )
  }
  
  export default Header