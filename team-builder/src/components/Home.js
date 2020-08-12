import React from 'react'
import styled from "styled-components";

const HomeWrap = styled.body`
// background:white;
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,700&display=swap');

border:4px white solid;
display:grid;
grid-auto-flow:row;
grid-auto-columns:repeat(4,1fr);
grid-auto-rows:minmax(40ch, 1fr);
.article{
    text-align:left;
    margin:5ch;height:100%;

    font-family: 'Comic Neue', cursive;
    h1, h2, p{
        background:yellow;
        font-size 1rem;
        padding: 1ch;
        border: 2px solid black;
    }
}
`;

export default function Home() {
    return (
        <HomeWrap>
            <div className="article">
                <h1>Module Project: Forms</h1>
                <p>This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored Form management in React. You learned about controled inputs, semantic HTML, some ES6 tools like the spread operator and computed properties, and synthetic events. In your project you will demonstrate proficiency of these subjects and principles by creating an application using each of these.</p>
            </div>
            <div className="article">
                <h2>Exit:</h2>
                <p>This project really did a number on my sleep. Wanting to put together a lot of what we've [Lambda Students] have learned so far I began to push a lot harder than usual to have something to show-off. A Form, multiple pages and various functionality to submissions and links but well worth it.</p>
            </div>
        </HomeWrap>
    )
}
