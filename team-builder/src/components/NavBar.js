import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color: #b247f5;
    height:30px;
    border-bottom:white 2px solid;
    position:fixed;
    width:100%;
    top:0;
    a{
        color:white;
        text-decoration:none;
        &:hover{
            color:#63c210;
        })

`;
const NavBar =()=>{
    return(
        <Nav>
            <Link to="/NewMembers">New Members</Link>
            <Link to="/CurrentMembers">Current Members</Link>
            <Link to="/">Home</Link>
        </Nav>
    )
}

export default NavBar;