import { Router } from 'express';
import {
    createTask,
    getTasks,
    updateTask,
    deleteTask
} from '../controllers/task.controller.js';
import { validateCreateTask } from '../middlewares/validateTask.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authMiddleware);

router.post('/', validateCreateTask, createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
