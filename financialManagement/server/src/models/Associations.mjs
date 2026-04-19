import { User } from "./UserModel.mjs";    
import { FixedExpense } from "./FixedExpense.mjs";
import { FixedIncome } from "./FixedIncome.mjs";
import { VariableExpense } from "./VariableExpenseModel.mjs";
import { VariableIncome } from "./VariableIncome.mjs";
    
User.hasMany(FixedExpense, {foreignKey: 'userId',
        as: 'fixedExpenses'});
User.hasMany(FixedIncome, {foreignKey: 'userId',
        as: 'fixedIncomes'});
User.hasMany(VariableExpense, {foreignKey: 'userId',
        as: 'variableExpenses'});
User.hasMany(VariableIncome, { foreignKey: 'userId',
        as: 'variableIncomes'});

FixedExpense.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

FixedIncome.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

VariableExpense.belongsTo(User, {
    foreignKey: 'userId',
        as: 'user'
});

VariableIncome.belongsTo(User, 
    {foreignKey: 'userId',
        as: 'user'}
);