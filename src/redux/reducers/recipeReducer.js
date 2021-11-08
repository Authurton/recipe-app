import { ActionTypes } from "../constants/action-types";

const initialState = {
     recipes: [],
 }

 export const recipeReducer = (state = initialState , {type, payload}) => {
    switch(type){
        case ActionTypes.SET_RECIPES:
            return {...state, recipes: payload};

        default:
            return state;

    }
};

export const selectedRecipeReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_RECIPE:
            return{...state, ...payload}
    
        default:
           return state;
    }
}

  