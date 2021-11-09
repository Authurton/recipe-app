import React from "react";
import { useSelector } from "react-redux";
import "./RecipeComponent.css"


const RecipeComponent = () => {
    const recipes  = useSelector((state) => state.allRecipes.recipes);
    const renderList =   recipes.map((recipe) => {
        const {id,text, recipe:{ingredients},label, image} = recipe;

        return(
            <div>
                <img className="recipe__image" src={recipe.recipe.image} alt="Tacos..."/>
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
            </div>
        )})

    return(
        <>{renderList}</>
        
    )
}

export default RecipeComponent;