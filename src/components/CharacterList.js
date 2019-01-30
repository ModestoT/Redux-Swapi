import React from "react";
import { connect } from 'react-redux';

import Character from "./Character";

import { getChars } from '../actions';

class CharacterList extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.getChars();
  }

  render(){
    return (
      <ul>
        {this.props.characters && (
          this.props.characters.map(character => {
            return <Character key={character.name} character={character} />;
          })
        )}
      </ul>
    );
  };
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetchingChars: state.charsReducer.fetchingChars
});

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterList);
