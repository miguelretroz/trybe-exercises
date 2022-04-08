import express from 'express';
import { Request, Response } from 'express';
import StatusCode from '../enums/StatusCodes';

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
export const getAll = (_req: Request, res: Response) => {
  return res.status(StatusCode.NOT_IMPLEMENTED).end();
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
 export const getById = (_req: Request, res: Response) => {
  return res.status(StatusCode.NOT_IMPLEMENTED).end();
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
 export const register = (_req: Request, res: Response) => {
  return res.status(StatusCode.NOT_IMPLEMENTED).end();
};
router.post('/users/register', register);

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
 export const update = (_req: Request, res: Response) => {
  return res.status(StatusCode.NOT_IMPLEMENTED).end();
};
router.put('/users/edit/:userId', update);

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
