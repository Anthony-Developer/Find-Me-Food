import React from 'react'

function Search(props) {
  //console.log(props)

    return (
      <div className="search-component">

        <form action="" className="search-form-div">
          <input type="text" placeholder=' Search for Food' onChange={props.search} value={props.searchInput} />
          <button onClick={props.click}> Search </button>
        </form>

      </div>
    )
  }
  
  export default Search