/*jshint esversion: 6 */
import React from "react";
import styled from 'styled-components';


function Team({team}){
const Wrapper = styled.section`
  margin:0 auto;
  display:flex;
  justify-content: space-around;
`

const Card = styled.div`
  background: #d6bd78;
  color: #465282;
  border:1px #171826 solid;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-between;
  padding:0.5rem;
`

const Roster = team.map( (member, index)=>{
  return(
  <Card key={index}>
    <h2>{member.name}</h2>
    <h3>{member.codename}</h3>
    <p>{member.team}</p>
    <p>{member.email}</p>
    <p>{member.role}</p>
  </Card>
)});

return(
        <Wrapper>
          {Roster}
        </Wrapper>
      )
}

export default Team;
