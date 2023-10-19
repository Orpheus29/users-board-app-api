import express from 'express';
import cors from 'cors';
import { UsersController } from './controllers/users.controller';
import { ColorsController } from './controllers/colors.controller';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5000;
const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_URL;

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

app.get('/', (req, res) => {
    res.end('Hello world!');
});

app.get('/users', UsersController.getAll);

app.post('/users', express.json(), UsersController.create);

app.get('/users/:userId', UsersController.getById);

app.get('/colors', ColorsController.getAll);

app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
