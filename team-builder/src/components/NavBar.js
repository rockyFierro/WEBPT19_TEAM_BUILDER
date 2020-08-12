import React from "react";
import {Link} from "react-router-dom";

const NavBar =()=>{
    return(
        <div>
            <Link to="/NewMembers">New Members</Link>
            <Link to="/CurrentMembers">Current Members</Link>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NavBar;