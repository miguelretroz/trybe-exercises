import express from 'express';

import users from './users';

const root = express.Router({ mergeParams: true });

root.use(users);

export default root;
