import { GET_IMAGE } from './';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message }
};

export default getImage;
