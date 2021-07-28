export const GET_IMAGE = 'GET_IMAGE';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message }
};

export default getImage;
