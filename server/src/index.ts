import { app } from './app';
import config from './config';

const startServer = () => {
  app.listen(config.port, () => {
    console.log(`service running on on PORT: ${config.port}`);
  });
};

startServer();
