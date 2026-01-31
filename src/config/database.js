import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres',
        port: process.env.PORT,
        logging: false,
        define: {
            underscored: false,
            freezeTableName: true
        }
    }
);


sequelize.authenticate()
    .then(() => console.log('✅ Conexión a BD exitosa'))
    .catch(err => console.error('❌ Error conectando a BD:', err));
