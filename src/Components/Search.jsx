import React, { useState } from 'react'

function Search(props) {
  const [food, setFood] = useState(true)

  let foodOrLocation

    // Will alternate between the "Search for food" or "Change Location"
    if (food === true) {
      foodOrLocation = (
          <div className="change-food-location">
            <form action="" className="search-form-div">
              <input type="text" placeholder=' Search for Food' onChange={props.textInput} value={props.value} className="search-box" />
              <button onClick={props.buttonClick} className="search-button"> Search </button>
            </form>

            <div className="change-food-location">
              <button onClick={() => setFood(!food)} className="change-food-location-button"> Change Location </button>
            </div>
          </div>
      )
    } else {
      return (
          <div className="change-food-location">
            <form action="" className="search-form-div">
              <input type="text" placeholder=' Change Location' onChange={props.locationChange} className="search-box" />
              <button onClick={props.buttonLocationClick} className="search-button"> Search </button>
            </form>

            <div className="change-food-location">
              <button onClick={() => setFood(!food)} className="change-food-location-button"> Food Search </button>
            </div>
          </div>
      )
    }


  return (
    <div className="search-component">

      {foodOrLocation}

    </div>
  )
}

export default Search