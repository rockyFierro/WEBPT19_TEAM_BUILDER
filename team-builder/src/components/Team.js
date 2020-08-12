/*jshint esversion: 6 */
import React from "react";
import styled from 'styled-components';


function Team({team}){

const Roster = team.map( (member, index)=>{
    return(
    <div key={index} className="tradingCard">
      <div className="badge">
        <h2>{member.name}</h2>
        <h3>{member.codename}</h3>
      </div>
      <div className="contact">
        <p>{member.team}</p>
        <p>{member.email}</p>
        <p>{member.role}</p>
      </div>
    </div>
)});

return(
        <div className="page">
          {Roster/*I honestly don't remember using this pattern before, but I like it.*/}
        </div>
      )
}

export default Team;
