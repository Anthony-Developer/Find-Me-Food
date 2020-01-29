import React, { useState } from 'react'

function Search(props) {
  const [food, setFood] = useState(true)

  const foodSearchBox = (

    <form action="" className="search-form-div">
      <input type="text" placeholder=' Search for Food' onChange={props.textInput} value={props.value} className="search-box" />
      <button onClick={props.buttonClick} className="search-button"> Search </button>
    </form>
  )

  const locationSearchBox = (

    <form action="" className="search-form-div">
      <input type="text" placeholder=' Change Location' onChange={props.locationChange} className="search-box" />
      <button onClick={props.buttonLocationClick} className="search-button"> Search </button>
    </form>

  )

  const foodOrLocationButton = (

    <button onClick={() => setFood(!food)}> Change Location </button>

  )

  // const searchToDisplay =
  
  //   if (food.state == true) {
  //      {foodSearchBox}
  //   } else {
  //      {locationSearchBox}
  //  }
  

  return (
    <div className="search-component">

      {locationSearchBox}

      {foodOrLocationButton}

    </div>
  )
}

export default Search