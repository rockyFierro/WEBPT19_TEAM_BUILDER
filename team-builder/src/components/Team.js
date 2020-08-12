/*jshint esversion: 6 */
import React,
{useState} from "react";
import styled from 'styled-components';

const Page = styled.body`
  padding:5rem;  
  background:#6e1d51;
  display:grid;
  grid-template-columns: repeat(3,1fr);
  height:100vh;
  grid-gap:10px;
  margin:0%;
`;

const Card = styled.div`
    display:flex;
    border-radius:18px;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    background:#000;
    color: #e3eb73;
    .badge{
      border-bottom: 2px #e3eb73 solid;
    }
    .contact{
      border:1px solid #e3eb73;
      border-radius: 15px;
      height:50%;
      padding: 1rem;
    }
    button{
      margin-bottom:5px;
    }

  `;

function Team({team, memberToEdit}){

const Roster = team.map( (member, index)=>{
    return(
    <Card key={index} >
      <div className="badge">
        <h2>{member.name}</h2>
        <h3>{member.codename}</h3>
      </div>
      <div className="contact">
        <p>{member.team}</p>
        <p>{member.email}</p>
        <p>{member.role}</p>
      </div>
      <button onClick={
        () => {
          memberToEdit({...member})
          }}>Edit</button>
    </Card>
)});

return(
        <Page>
          {Roster/*I honestly don't remember using this pattern before, but I like it.*/}
        </Page>
      )
}

export default Team;
