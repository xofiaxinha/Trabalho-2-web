const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/rotas');
const cors = require('cors');
//const expenses = require('./models/expenses');
const Sequelize = require('sequelize');
const config = require('./config/config')[process.env.NODE_ENV || 'development'];

app.use(cors());
app.use(express.json());
app.use(routes);

async function connectToPostgres(){
    const sequelize = new Sequelize(config.postgres.options);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

config.postgres.client = connectToPostgres();

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});