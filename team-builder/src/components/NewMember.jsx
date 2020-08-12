import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
  margin: 50px;
  form{
    background: rgba(194, 17, 130,0.3);
    display:flex;
    flex-direction:column;
    label{
      margin:15px;
      input{
        border:2px solid #000;
        height:1.5rem;
        border-radius:5px;
      }
    }
    button{
      width:20ch;
      align-self:center;
      height:2rem;
      margin:8px;
      background:#c21182;
      color:#fff;
      border-radius:15px;
    }
  }
`;

const NewMember = (props) => {
  const [member, setMember] = useState({
    name: props.name,
    codename: props.codename,
    team: props.team,
    email: props.email,
    role: props.role,
  });

  const handleChanges = (event) => {
    console.log("changes", event.target.value);
    const newStateObj = { ...member, [event.target.name]: event.target.value };
    setMember(newStateObj);
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addMember(member);
  };

  return (
    <Form>
      <form onSubmit={submitForm}>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChanges}
            value={member.name}
          />
        </label>
        <label htmlFor="codename">
          <input
            id="codename"
            type="text"
            name="codename"
            placeholder="codename"
            onChange={handleChanges}
            value={member.codename}
          />
        </label>
        <label htmlFor="team">
          <input
            id="team"
            type="text"
            name="team"
            placeholder="team"
            onChange={handleChanges}
            value={member.team}
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="e-mail"
            onChange={handleChanges}
            value={member.email}
          />
        </label>
        <label htmlFor="role">
          <input
            id="role"
            type="role"
            name="role"
            placeholder="role"
            onChange={handleChanges}
            value={member.role}
          />
        </label>
        <button type="submit">Add Member</button>
      </form>
    </Form>
  );
};

export default NewMember;
