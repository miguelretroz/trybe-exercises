import User from '../interfaces/User';
import usersModels from '../models/users';
import Error from '../interfaces/Error';
import StatusCode from '../enums/StatusCodes';

export const register = async (newUserData: User): Promise<any | Error> => {
  if (await usersModels.getByEmail(newUserData.email)) return {
    message: 'Email already registered',
    code: StatusCode.CONFLICT,
  };

  const newUser: User = await usersModels.register(newUserData);

  return newUser;
};

export default {
  register,
};
