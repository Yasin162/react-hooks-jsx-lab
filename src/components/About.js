import React from "react";
import { image } from "../data/data";
import NavBar from "./NavBar";

function About() {
  <NavBar/>
  return <div id='about'>
    <h2>About Me</h2>
    <p>This supposed to be the about section</p>
    <img src={image} alt='I made this'></img>
  </div>;

}

export default About;
