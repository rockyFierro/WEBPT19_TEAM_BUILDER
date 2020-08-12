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
      name: props.name,
      codename:props.codename,
      team:props.team,
      email:props.email,
      role:props.role
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
