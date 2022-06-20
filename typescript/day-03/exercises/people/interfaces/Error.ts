import StatusCode from '../enums/StatusCodes';

export default interface Error {
  code: StatusCode,
  message: string,
}