import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

import User from '../interfaces/User';

export const getByEmail = async (userEmail: string): Promise<User | null> => {
  const users: User[] = JSON.parse(await fs.readFile('./users.json', 'utf-8'));

  const userIndex = users.findIndex(({ email }) => email === userEmail);

  if (userIndex >= 0) return users[userIndex];

  return null;
};

export const register = async (userData: User): Promise<User> => {
  const id = uuidv4();
  userData.id = id;

  const users: User[] = JSON.parse(await fs.readFile('./users.json', 'utf-8'));

  users.push(userData);

  await fs.writeFile('./users.json', JSON.stringify(users), 'utf-8');

  const { password, ...userDataWithoutPassword } = userData;

  return userDataWithoutPassword;
};

export const getAll = async (): Promise<User[]> => {
  const users: User[] = JSON.parse(await fs.readFile('./users.json', 'utf-8'));

  return users;
};

export default {
  register,
  getByEmail,
  getAll,
};
