import { DataTypes } from "sequelize";

export const ExpenseVariable = sequelize.define('expenseVariable', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        color: DataTypes.STRING,
        value: DataTypes.FLOAT

    });