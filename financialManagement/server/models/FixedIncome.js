import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgree";
export const FixedIncome = sequelize.define('FixedIncome', {
        name: DataTypes.STRING,
        color: DataTypes.STRING,
        value: DataTypes.FLOAT,
        id: DataTypes.UUIDV4
    });