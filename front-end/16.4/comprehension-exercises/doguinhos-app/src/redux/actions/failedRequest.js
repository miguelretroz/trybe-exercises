import { FAILED_REQUEST } from './';

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export default failedRequest;
