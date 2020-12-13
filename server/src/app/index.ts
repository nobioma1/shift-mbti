import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import appRouter from '../routes';
import { NotFoundError } from '../common/errors';
import { errorHandler } from '../common/middlewares';

const corsOptions = {
  origin: ['http://localhost:1234', 'http://localhost:3000'],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', appRouter);

app.all('*', async () => {
  throw new NotFoundError('Route Not Found');
});

app.use(errorHandler);

export { app };
