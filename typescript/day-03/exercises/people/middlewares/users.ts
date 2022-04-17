import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/StatusCodes';
import User from '../interfaces/User';

import usersSchemas from '../schemas/users';

export const register = (req: Request<{}, {}, User>, res: Response, next: NextFunction) => {
  const { error } = usersSchemas.register.validate(req.body);

  if (error) return res.status(StatusCode.UNAUTHORIZED).json({ message: error.details[0].message });

  next();
};

export const update = (req: Request<{}, {}, User>, res: Response, next: NextFunction) => {
  const { error } = usersSchemas.update.validate(req.body);

  if (error) return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ message: error.details[0].message });

  next();
};

export default {
  register,
  update,
};