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

export const getAll = async (): Promise<User[]> => {
  const users = await usersModels.getAll();

  const usersWithoutPassword = users.map(
    ({ password, ...userWithoutPassword }: User) => userWithoutPassword,
  );

  return usersWithoutPassword;
};

export const getById = async (userId: string): Promise<User | {}> => {
  const user = await usersModels.getById(userId);

  if (user) {
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  return {};
};

export const update = async (userData: User): Promise<User | Error> => {
  const userUpdated = await usersModels.update(userData);

  if (userUpdated) {
    const { password, ...userWithoutPassword } = userUpdated;

    return userWithoutPassword;
  };

  return {
    message: 'User not found',
    code: StatusCode.NOT_FOUND,
  }
};

export default {
  register,
  getAll,
  getById,
  update
};
