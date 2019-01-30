import React from "react";
import Character from "./Character";


import './CharacterList.css';

const CharacterList = props => {
    return (
      <ul>
        {props.characters.map(character => {
            return <Character key={character.name} character={character} />;
          })}
      </ul>
    );
}



export default CharacterList;
