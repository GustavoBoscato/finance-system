import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgree.mjs";
export const FixedIncome = sequelize.define('fixedIncome', {
        name: DataTypes.STRING,
        color: DataTypes.STRING,
        value: DataTypes.FLOAT,
         id: {
            type: DataTypes.UUIDV4,
            primaryKey: true
            }

})
        