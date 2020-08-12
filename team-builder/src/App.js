import React,
  { useState } from 'react';
import './App.css';
import {teamList} from "./data"
import Home from "./components/Home";
import Team from "./components/Team";
import NewMember from "./components/NewMember";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const [teamMembers, setTeamMembers] = useState(teamList);

  const addMember = props => { //passed into New Member form and kicked back after submit with a new team member object
    const newMember = { //the shape of the new member
      id:Date.now(), //not certain if I need this id as key id is being provided by unique place in the members array being used to render all members.
      name: props.name,
      codename:props.codename,
      team:props.team,
      email:props.email,
      role:props.role
    };
    setTeamMembers([...teamMembers, newMember]);// takes the newest member and appends it to a cope of the team members state and is passed back to team.
  }

  return (
    <Router>
      <div className="App">
        {
          console.log(teamMembers)
        }
        <NavBar/>
        <Switch>
          <Route path="/NewMembers">
          <NewMember addMember={addMember}/>{/*will really need to make time for a deep dive into props and passing functions.*/}
          </Route>
          <Route path="/CurrentMembers">
          <Team team={teamMembers}/>{/*final render of team with up to date list passed in for some quality mapping*/}
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
