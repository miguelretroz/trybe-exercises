export const FAILED_REQUEST = 'FAILED_REQUEST';

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export default failedRequest;
