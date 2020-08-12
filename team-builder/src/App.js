import React,
  { useState } from 'react';
import './App.css';
import {teamList} from "./data"
import Team from "./components/Team"
import NewMember from "./components/NewMember";

function App() {
  const [teamMembers, setTeamMembers] = useState(teamList);

  const addMember = props => {
    const newMember = {
      id:Date.now(),
      name:props.member.name,
      codename:props.member.codename,
      team:props.member.team,
      email:props.member.email,
      role:props.member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  }

  return (
    <div className="App">
      {
        console.log(teamMembers)
      }
      <NewMember addMember={addMember}/>
      <Team team={teamMembers}/>

    </div>
  );
}

export default App;
