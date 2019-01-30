import React from "react";

import './Character.css';

const Character = props => {
  return <div className="character-container">
    <li>{props.character.name}</li>
    <li>Height: {props.character.height}</li>
    <li>Mass: {props.character.mass}</li>
    <li>Birth Year: {props.character.birth_year}</li>
    <li>Gender: {props.character.gender}</li>
    <li>Hair Color: {props.character.hair_color}</li>
    <li>Eye Color: {props.character.eye_color}</li>
  </div>;
};

export default Character;
