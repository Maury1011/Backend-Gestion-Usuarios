
import app from './src/app.js';
import {sequelize} from "./src/config/database.js";

await sequelize.sync({ alter: true });
console.log("✅ Tablas sincronizadas");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

