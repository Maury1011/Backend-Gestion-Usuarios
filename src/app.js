
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes);

app.use('/tasks', taskRoutes);


app.use(errorHandler); //siempre al final

export default app;
