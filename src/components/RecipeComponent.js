import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const RecipeComponent = () => {

    const recipes  = useSelector((state) => state.allRecipes.recipes);
    const renderList = recipes.map((recipe) => {
        const {id, label, image} = recipe;

        return(
        <div key={id}>
            <Link to={`/recipe/${id}`}>
                <div>{label}</div>
                <div><img src={image} alt="image"/></div>
                
            </Link>
        </div>
        
        )
    })

    return(
        <>{renderList}</>
    )
}

export default RecipeComponent;