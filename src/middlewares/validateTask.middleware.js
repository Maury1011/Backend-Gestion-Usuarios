import { AppError } from '../utils/AppError.js';

export const validateCreateTask = (req, res, next) => {
    const { title } = req.body;

    if (!title || title.trim() === '') {
        throw new AppError('El título es obligatorio', 400);
    }

    if (title.length > 100) {
        throw new AppError('El título no puede superar 100 caracteres', 400);
    }

    next();
};
