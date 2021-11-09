import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRecipes } from "../redux/actions/recipesActions";
import RecipeComponent from "./RecipeComponent";



const RecipesListings = ({query}) => {
    const recipes  = useSelector((state) => state);
    const dispatch = useDispatch();

    const searchQuery = Boolean(query) ? query : "tacos"
    
    const fetchRecipes = async() => {
        const response = await axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=53abda96&app_key=bf5b8400a14b890817623912fd409869&from=0&to=3&calories=591-722`)
        .then((response) => dispatch(setRecipes(response.data.hits)))
        .catch((err) => console.log("Err", err))
            
    };

    useEffect(() => {
        fetchRecipes();
    }, [query])
    
    return(
        <div className="app__recipes" >
            <RecipeComponent />
           
        </div>
    )
}

export default RecipesListings;