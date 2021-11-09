import React, { useEffect, useState} from 'react';
import axios from 'axios';



function Header({setSearchQuery, query}) {
    
    return (
        <div>
            <h1>Here is a list of nice tacos Nicc....</h1>
            <form className="app__form" >
                <input type="text" placeholder="Search for tacos recipes..."  
                     className="app__input"
                     onChange={(e) => setSearchQuery(e.target.value)}
                     value={query}
                
                />
                <input className="app__submit" type="submit" value="Search"/>

            </form>
        </div>
    )
}

export default Header
