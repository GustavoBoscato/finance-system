import express from 'express';
import { sequelize } from './src/db/postgree.mjs';
import { userRoutes } from './src/routes/UserRoutes.mjs';
import { fixedExpensiveRoutes } from './src/routes/FixedExpenseRoutes.mjs';
import { fixedIncomeRoutes } from './src/routes/FixedIncome.mjs';
import { variableExpenseRouter } from './src/routes/VariableExpense.mjs';
const app = express();

app.use(express.json());
app.use('/user', userRoutes)
app.use('/fixedExpense', fixedExpensiveRoutes)
app.use('/fixedIncome', fixedIncomeRoutes);
app.use('/variableExpense', variableExpenseRouter);
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