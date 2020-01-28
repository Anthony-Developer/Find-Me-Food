import React from 'react'

function Search(props) {

    return (
      <div className="search-component">

        <form action="" className="search-form-div">
          <input type="text" placeholder=' Search for Food' onChange={props.textInput} value={props.searchInput} />
          <button onClick={props.buttonClick}> Search </button>
        </form>

      </div>
    )
  }
  
  export default Search