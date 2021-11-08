import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RecipeComponent from './RecipeComponent';


function Header() {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])

    async function getRecipes(){
        const res = await axios.get("https://api.edamam.com/search?q=chicken&app_id=53abda96&app_key=bf5b8400a14b890817623912fd409869&from=0&to=3&calories=591-722&health=alcohol-free")
        setRecipes(res.data.hits)
        console.log(res.data)
    }

    // useEffect(() => {
    //     getRecipes();
    // }, [])


    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes()

    }
    return (
        <div>
            <h1>Search for your fav Tacos</h1>
            <form className="app__form" onSubmit={onSubmit} >
                <input type="text" placeholder="Search for tacos recipes Nicc..." value={query} 
                    onChange={(e) => setQuery(e.target.value)} className="app__input"
                
                />
                <input className="app__submit" type="submit" value="Search"/>

            </form>
            {/* <div className="app__recipes" >
                {recipes.map(recipe => {
                    return <RecipeComponent recipe={recipe} />
                })}
            </div> */}
        </div>
    )
}

export default Header
