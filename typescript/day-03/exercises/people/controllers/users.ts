import express from 'express';
import { Request, Response } from 'express';
import StatusCode from '../enums/StatusCodes';

import usersServices from '../services/users';
import User from '../interfaces/User';
import usersMiddlewares from '../middlewares/users';
import Error from '../interfaces/Error';

const router = express.Router({ mergeParams: true });

/**
 * @openapi
 * /users/list:
 *   get:
 *     summary: Listagem de todos os usuários cadastrados
 *     description: Rota para listar todos os usuários cadastrados.
 *     tags:
 *     - Users
 *     responses:
 *       200:
 *         description: Retorna todos os usuários.
 *         content:
 *            'application/json':
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                      format: ObjectId
 *                    name:
 *                      type: string
 *                    email:
 *                      type: string
 *                      format: email
 */
export const getAll = async (_req: Request, res: Response) => {
  const users: User[] = await usersServices.getAll();
  return res.status(StatusCode.OK).json(users);
};
router.get('/users/list', getAll);

/**
 * @openapi
 * /users/{userId}:
 *   get:
 *     summary: Listagem de usuário por ID
 *     description: Rota para lista usuário por ID.
 *     parameters:
 *     - name: userId
 *       in: path
 *       description: ID do usuário
 *       required: true
 *       schema:
 *         type: string
 *         example: 1
 *     tags:
 *     - Users
 *     responses:
 *       200:
 *         description: Retorna um usuário por ID.
 *         content:
 *            'application/json':
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    format: ObjectId
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                    format: email
 */
 export const getById = async (req: Request<{ userId: string }>, res: Response) => {
  const { userId } = req.params;

  const user = await usersServices.getById(userId);

  return res.status(StatusCode.OK).json(user);
};
router.get('/users/:userId', getById);

/**
 * @openapi
 * /users/register:
 *   post:
 *     summary: Registro de usuário
 *     description: Rota para registro de novos usuários.
 *     tags:
 *     - Users
 *     requestBody:
 *       $ref: '#/components/requestBodies/User/Register'
 *     responses:
 *       200:
 *         description: Retorna usuário recém registrado.
 *         content:
 *            'application/json':
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    format: ObjectId
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                    format: email
 */
export const register = async (req: Request<{}, {}, User>, res: Response) => {
  const { email, name, password } = req.body;

  const registrationResult = await usersServices.register({ email, name, password });

  if (registrationResult.code) return res.status(registrationResult.code).json(registrationResult);

  return res.status(StatusCode.OK).json(registrationResult);
};
router.post('/users/register', usersMiddlewares.register, register);

/**
 * @openapi
 * /users/edit/{userId}:
 *   put:
 *     summary: Edição de usuário
 *     description: Rota para editar usuários.
 *     parameters:
 *     - name: userId
 *       in: path
 *       description: ID do usuário
 *       required: true
 *       schema:
 *         type: string
 *         example: 1
 *     tags:
 *     - Users
 *     requestBody:
 *       $ref: '#/components/requestBodies/User/Register'
 *     responses:
 *       200:
 *         description: Retorna usuário recém editado.
 *         content:
 *            'application/json':
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    format: ObjectId
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                    format: email
 */
 export const update = async (req: Request<{ userId: string }, {}, User>, res: Response) => {
  const { userId } = req.params;
  const { email, name, password } = req.body;

  const userUpdated: any = await usersServices.update({ id: userId, email, name, password });

  if (userUpdated.code) return res.status(userUpdated.code).json({ message: userUpdated.message });

  return res.status(StatusCode.OK).json(userUpdated);
};
router.put('/users/edit/:userId', usersMiddlewares.update, update);

/**
 * @openapi
 * /users/remove/{userId}:
 *   delete:
 *     summary: Edição de usuário
 *     description: Rota para editar usuários.
 *     parameters:
 *     - name: userId
 *       in: path
 *       description: ID do usuário
 *       required: true
 *       schema:
 *         type: string
 *         example: 1
 *     tags:
 *     - Users
 *     responses:
 *       204:
 *         description: Não retorna nada.
 */
 export const remove = (_req: Request, res: Response) => {
  return res.status(StatusCode.NOT_IMPLEMENTED).end();
};
router.delete('/users/remove/:userId', remove);

export default router;
