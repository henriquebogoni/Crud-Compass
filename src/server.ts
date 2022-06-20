require('dotenv').config();
import { App } from './app';
import { logger } from './utils/LoggerUtils';

const app = new App()
const PORT = process.env.LOCAL_APPLICATION_PORT;

app.express.listen(PORT, () => {
   logger.info(`Server run in port ${PORT}`)
});

