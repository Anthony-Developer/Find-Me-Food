import React, { useState, useEffect } from 'react'

function Search(props) {
  const [food, setFood] = useState(true)

  let foodOrLocation
  
    if (food == true) {
      
      foodOrLocation = (
      
        <div>
          
          <form action="" className="search-form-div">
            <input type="text" placeholder=' Search for Food' onChange={props.textInput} value={props.value} className="search-box" />
            <button onClick={props.buttonClick} className="search-button"> Search </button>
          </form>

          <div className="change-food-location">
            <button onClick={() => setFood(!food)}> Change Location </button>
          </div>

        </div>

      
      )
    


    } else {
      return (
      <div>
        <form action="" className="search-form-div">
          <input type="text" placeholder=' Change Location' onChange={props.locationChange} className="search-box" />
          <button onClick={props.buttonLocationClick} className="search-button"> Search </button>
        </form>

        <div className="change-food-location">
          <button onClick={() => setFood(!food)}> Search for Food </button>
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