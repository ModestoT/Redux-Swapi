import { FETCHING_CHARS, FETCHING_CHARS_SUCCESS, FETCHING_CHARS_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetchingChars: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS: 
      return {
        ...state, 
        error: '',
        fetchingChars: true
      };

    case FETCHING_CHARS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        error: '',
        fetchingChars: false
      };

    case FETCHING_CHARS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingChars: false
      }
    default:
      return state;
  }
};
