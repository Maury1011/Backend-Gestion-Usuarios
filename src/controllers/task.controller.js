import { Task } from '../models/index.js';
import { AppError } from '../utils/AppError.js';

export const createTask = async (req, res) => {
    const task = await Task.create({
        title: req.body.title,
        userId: req.user.id
    });
    res.status(201).json(task);
};


export const getTasks = async (req, res) => {
    const tasks = await Task.findAll({
        where: { userId: req.user.id }
    });
    res.json(tasks);
};


export const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findOne({
        where: { id: req.params.id, userId: req.user.id }
        });

        if (!task) {
            throw new AppError('Tarea no encontrada', 404);
        }

        task.title = req.body.title ?? task.title;
        task.completed = req.body.completed ?? task.completed;

        await task.save();
        res.json(task);

    } catch (error) {
        next(error);
    }
};


export const deleteTask = async (req, res) => {
    const deleted = await Task.destroy({
        where: {
            id: req.params.id,
            userId: req.user.id
        }
    });

    if (!deleted) return res.sendStatus(404);
    res.sendStatus(204);
};


