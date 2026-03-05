import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgree";
export const FixedExpensive = sequelize.define('FixedExpensive', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        color: DataTypes.STRING,
        value: DataTypes.FLOAT

    });