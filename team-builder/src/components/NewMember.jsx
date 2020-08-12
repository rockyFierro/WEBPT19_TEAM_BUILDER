import React,
{useState} from "react";
import styled from "styled-components"


const NewMember = (props) => {

  const [ member, setMember ] = useState({
    name: props.name,
    codename: props.codename,
    team: props.team,
    email: props.email,
    role:props.role
  });

  const handleChanges = event => {
    console.log("changes",event.target.value);
    const newStateObj = {...member, [event.target.name]:event.target.value};
    setMember(newStateObj);
    console.log(member);
    };

  const submitForm = event =>{
    event.preventDefault();
    props.addMember(member);
  };

  return(
    <div>
    <form onSubmit={submitForm}>
      <label htmlFor="name">New Member Name:
      <input
        id="name"
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChanges}
        value={member.name}/>
</label>
      <label htmlFor="codename">New Member Codename:  </label>
      <input
        id="codename"
        type="text"
        name="codename"
        placeholder="codename"
        onChange={handleChanges}
        value={member.codename}/>

      <label htmlFor="team">New Member Team:  </label>
        <input
          id="team"
          type="text"
          name="team"
          placeholder="team"
          onChange={handleChanges}
          value={member.team}/>

        <label htmlFor="email">New Member Email:  </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e-mail"
              onChange={handleChanges}
              value={member.email}/>

            <label htmlFor="role">New Member Role:  </label>
              <input
                id="role"
                type="role"
                name="role"
                placeholder="role"
                onChange={handleChanges}
                value={member.role}/>


    <button type="submit" >Add Member</button>
    </form>
  </div>
  )
}

export default NewMember;
