import express from 'express';
import { sequelize } from './db/postgree.js';
const app = express();

app.use(express.json());

app.listen(3000,  async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been sucessfull')
    } catch (error) {
        console.log('Unable to connect to the database', error)
    }
    
})