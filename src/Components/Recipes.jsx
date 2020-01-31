import React from 'react'

function Recipes({ recipeName, currentRecipes }) {

    const resultsToDisplay = currentRecipes.map((item) => {

        return (
            <div className="recipes-individual-divs" key={item.index}>
                <h2 className="recipes-individual-title">{item.recipe.label}</h2>
                <a href={item.recipe.url} className="recipes-links"><img src={item.recipe.image} className="recipes-img" alt="recipes-img"/></a> 
                    <br />
                    <br />
                
                <div className="recipes-info">
                    <h4> Ingredients </h4>
                    {item.recipe.ingredients.map((ingredients) => {
                        return(
                        <p className="results-descripton"> {ingredients.text} </p>
                        )
                    })}
                
                </div>

            </div>
        )
    })

    return (

        <div className="recipes-div">

            <h1 className="component-title"> {recipeName} Recipes </h1>

            <div className="recipes-to-display">
                {resultsToDisplay}
            </div>

        </div>
    )
}

export default Recipes