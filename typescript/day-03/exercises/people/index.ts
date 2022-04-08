import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import root from './controllers/root';

const app = express();
app.use(express.json());

const PORT = 3000;

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Exercise 01 People',
      version: '1.0.0',
    },
    components: {
      requestBodies: {
        User: {
          Register: {
            description: 'Dados do usuário',
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string'
                    },
                    email: {
                      type: 'string',
                      format: 'email',
                    },
                    password: {
                      type: 'string',
                      format: 'password',
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  apis: ['./controllers/**/*.ts']
}

app.use(root);

app.get('/', (_req: Request, res: Response) => res.redirect('/api-docs'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
