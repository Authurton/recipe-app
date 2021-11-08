import React, {useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRecipes } from "../redux/actions/recipesActions";
import RecipeComponent from './RecipeComponent';

function RecipesListings() {

    const recipes = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchRecipes = async() => {
        const response = await axios.get("https://api.edamam.com/search?q=chicken&app_id=53abda96&app_key=bf5b8400a14b890817623912fd409869&from=0&to=3&calories=591-722&health=alcohol-free")
            .catch((err) => {
                console.log("Err", err)
            });
            dispatch(setRecipes(response.data));
    };

    useEffect(() => {
        fetchRecipes();
    }, [])
    console.log("Recipes:", recipes);

    return (
        <div className="app__recipes" >
                {/* {recipes.map(recipe => {
                    return <RecipeComponent recipe={recipe} />
                })} */}
                <RecipeComponent/>
            </div>
    )
}

export default RecipesListings
