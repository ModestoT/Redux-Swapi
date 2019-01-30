import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from '../actions';

import './CharacterListView.css';
// import actions

class CharacterListView extends React.Component {

  componentDidMount(){
    this.props.getChars();
  }

  render() {
    if (this.props.fetchingChars) {
      // return something here to indicate that you are fetching data
      return <h1>Loading...</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetchingChars: state.charsReducer.fetchingChars
});

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
