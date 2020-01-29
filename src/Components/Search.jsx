import React from 'react'

function Search(props) {

  return (
    <div className="search-component">

      <form action="" className="search-form-div">
        <input type="text" placeholder=' Search for Food' onChange={props.textInput} value={props.value} className="search-box" />
        <button onClick={props.buttonClick} className="search-button"> Search </button>
      </form>

    </div>
  )
}

export default Search