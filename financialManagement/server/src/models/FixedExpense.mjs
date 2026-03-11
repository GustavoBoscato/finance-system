import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgree.mjs";
export const FixedExpense = sequelize.define('fixedExpense', {
        name: {
                type: DataTypes.STRING,
                allowNull: false
        },
        description: DataTypes.STRING,
        color: DataTypes.STRING,
        value: DataTypes.FLOAT,
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
            }

    });