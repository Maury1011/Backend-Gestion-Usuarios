import { User } from './User.js';
import { Task } from './Task.js';

// Especifica la foreignKey en minúscula
User.hasMany(Task, {
    foreignKey: 'userId', // ← AGREGAR ESTO
    as: 'tasks'
});

Task.belongsTo(User, {
    foreignKey: 'userId', // ← AGREGAR ESTO
    as: 'user'
});

export { User, Task };