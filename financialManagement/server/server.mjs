import 'dotenv/config'
import express from 'express';
import { sequelize } from './src/db/postgree.mjs';
import { userRoutes } from './src/routes/UserRoutes.mjs';
import { fixedExpensiveRoutes } from './src/routes/FixedExpenseRoutes.mjs';
import { fixedIncomeRoutes } from './src/routes/FixedIncome.mjs';
import { variableExpenseRouter } from './src/routes/VariableExpense.mjs';
import { variableIncomeRoutes } from './src/routes/VariableIncomeRoutes.mjs';
import { AuthMiddleware } from './src/middlewares/Auth.mjs';
import './src/models/Associations.mjs';
const app = express();

app.use(express.json());
app.use('/user', userRoutes)

app.use('/fixedExpense', AuthMiddleware, fixedExpensiveRoutes)
app.use('/fixedIncome', AuthMiddleware, fixedIncomeRoutes);
app.use('/variableExpense', AuthMiddleware, variableExpenseRouter);
app.use('/variableIncome', AuthMiddleware, variableIncomeRoutes);
app.listen(3000, async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Connection has been successful');
        console.log(process.env.JWT_SECRET);
    } catch (error) {
        console.log('Unable to connect to the database', error);
    }
});