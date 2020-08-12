/*jshint esversion: 6 */
import React from "react";
import styled from 'styled-components';


function Team({team}){

const Roster = team.map( (member, index)=>{
  return(
  <div key={index}>
    <h2>{member.name}</h2>
    <h3>{member.codename}</h3>
    <p>{member.team}</p>
    <p>{member.email}</p>
    <p>{member.role}</p>
</div>
)});

return(
        <>
          {Roster}
        </>
      )
}

export default Team;
