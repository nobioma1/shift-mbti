import express from 'express';

import { NotFoundError } from '../errors';
import { errorHandler } from '../middlewares';

const app = express();
app.use(express.json());

app.use(errorHandler);

app.all('*', async () => {
  throw new NotFoundError('Route Not Found');
});

export { app };
