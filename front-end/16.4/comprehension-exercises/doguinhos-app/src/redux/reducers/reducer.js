import { GET_IMAGE, REQUEST_IMAGE, FAILED_REQUEST } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  imagePath: '',
  error: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case REQUEST_IMAGE:
    return { ...state, isFetching: true };
  case GET_IMAGE:
    return { ...state, imagePath: action.payload, isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};