import React,
{useState} from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    margin:2ch auto;
    display:flex;
    flex-direction:column;
    form{
      display:flex;
      flex-direction:column;
      align-items:center;
      margin:2ch auto;
      justify-content:space-around;
      width:45ch;
    }
    input{
      font-size:0.8rem;
      border-radius:5ch;
      padding:1ch;
    }
    button{
      margin:2rem;
      padding:2ch;
      border-radius:2ch;
    }
  `
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
    };

  const submitForm = event =>{
    event.preventDefault();
    props.addMember(member);
    setMember({name:"",codename:"",team:"Gold'93",email:"",role:""})
  };

  return(
    <Wrapper>
    <form onSubmit={submitForm}>
      <label htmlFor="name">New Member Name:  </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChanges}
        value={member.name}/>

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
    </Wrapper>
  )
}

export default NewMember;
