import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./RecipeComponent.css"


const RecipeComponent = () => {

    const recipes  = useSelector((state) => state.allRecipes.recipes);

        console.log(recipes)
    const renderList =   recipes.map((recipe) => {
        const {id, healthLabels,text, recipe:{ingredients}, ingredientLines, label, image} = recipe;

        if(ingredients && ingredients.length === 0){
            return <p>No ingredients yet....</p>
        }

        return(
            <div>
                <img className="recipe__image" src={recipe.recipe.image} alt="Taco image"/>
                <div className="recipe__label">{recipe.recipe.label}  </div>
                <div >
                    {
                        ingredients.map((ingredient) => {
                            const {id, food, foodCategory, text} = ingredient;
                            return (
                                <div key={id}>
                                    <div className="recipe__text"> {text} </div>
                                    <div> {food} </div>
                                    <div> {foodCategory} </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div></div>
            </div>
        )})

    return(
        <>{renderList}</>
        
    )
}

export default RecipeComponent;