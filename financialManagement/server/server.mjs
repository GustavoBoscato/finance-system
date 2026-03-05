import express from 'express';
import { sequelize } from './db/postgree.mjs';
import { userRoutes } from './routes/UserRoutes.mjs';
const app = express();

app.use(express.json());
app.use('/user', userRoutes)
app.listen(3000,  async () => {
    try {
        await sequelize.sync(() => {
            console.log('Connecting to the database')
        })
        console.log('Connection has been sucessfull')
    } catch (error) {
        console.log('Unable to connect to the database', error)
    }
    
})