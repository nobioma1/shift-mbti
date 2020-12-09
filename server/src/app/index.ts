import express from 'express';
import cors from 'cors';

import { NotFoundError } from '../errors';
import { errorHandler } from '../middlewares';

const corsOptions = {
  origin: ['https://localhost:3000'],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(errorHandler);

app.all('*', async () => {
  throw new NotFoundError('Route Not Found');
});

export { app };
