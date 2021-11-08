import { ActionTypes } from "../constants/action-types";

export const setRecipes = (recipes) => {
    return {
        type: ActionTypes.SET_RECIPES,
        payload: recipes,
    };
};

export const SELECTED_RECIPE = (recipe) => {
    return {
        type: ActionTypes.SELECTED_RECIPE,
        payload: recipe,
    };
};

 