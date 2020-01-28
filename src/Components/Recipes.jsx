import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Recipes(props) {
    console.log(props.name)
    const [currentRecipes, setCurrentRecipes] = useState([])

    const recipesAPI = `https://api.edamam.com/search?q=${props.name}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}&from=0&to=10`

    const newsResults = async () => {
        let res = await axios.get(
          recipesAPI
        )
        //console.log(res.data)
        setCurrentRecipes(res.data.hits)
      }

      useEffect(() => {
          newsResults()
      }, [])

      console.log(currentRecipes)

      const resultsToDisplay = currentRecipes.map((item) => {
          
            return (
              <div className="recipes-individual-divs" key={item.index}>    
                  <h2>{item.recipe.label}</h2>
                  <img src={item.recipe.image} className="recipes-img" />
                  <br />
                  <a href={item.recipe.url} className="recipes-links"> Link to recipe </a>
                  <br />
              </div>
          )
      })

    return (
        
        <div className="recipes-div">

            <h1 className="component-title"> {props.name} Recipes </h1>

            <div className="recipes-to-display">
                {resultsToDisplay}
            </div>
        
        </div>
    )
}

export default Recipes