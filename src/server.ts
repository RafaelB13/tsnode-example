import express, {Express} from 'express';
import { config } from 'dotenv';

import router from './routes';

config();

const port: number = parseInt(process.env.PORT as string, 10) || 8080;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(port, () => console.log(`Server is running on port ${port}`));