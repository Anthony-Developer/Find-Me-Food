import React from 'react'

function Recipes({ recipeName, currentRecipes }) {

    const resultsToDisplay = currentRecipes.map((item) => {

        return (
            <div className="recipes-individual-divs" key={item.index}>
                <h2 className="recipes-individual-title">{item.recipe.label}</h2>
                <img src={item.recipe.image} className="recipes-img" alt="recipes-img"/>
                <br />
                <a href={item.recipe.url} className="recipes-links"> Link to recipe </a>
                <br />
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