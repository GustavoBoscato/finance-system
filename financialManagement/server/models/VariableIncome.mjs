import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgree.mjs";
export const VariableIncome = sequelize.define('variableIncome', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        color: DataTypes.STRING,
        value: DataTypes.FLOAT,
         id: {
            type: DataTypes.UUIDV4,
            primaryKey: true
            }

    });