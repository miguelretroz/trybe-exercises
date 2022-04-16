import fs from 'fs/promises';

import User from '../interfaces/User';

export const getByEmail = async (userEmail: string): Promise<User | null> => {
  const users: User[] = JSON.parse(await fs.readFile('./users.json', 'utf-8'));

  const userIndex = users.findIndex(({ email }) => email === userEmail);

  if (userIndex >= 0) return users[userIndex];

  return null;
};

export default {
  getByEmail,
};
