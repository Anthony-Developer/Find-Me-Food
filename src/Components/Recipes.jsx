import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Recipes(props) {
    const [currentRecipes, setCurrentRecipes] = useState([])
    const recipeName = props.name

    const recipesAPI = `https://api.edamam.com/search?q=${recipeName}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}&from=0&to=10`

    const recipeResults = async () => {
        let res = await axios.get(
          recipesAPI
        )
        setCurrentRecipes(res.data.hits)
      }

      useEffect(() => {
          recipeResults()
      }, [recipeName])

      console.log(recipeName)

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