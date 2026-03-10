import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgree.mjs";
export const FixedExpensive = sequelize.define('fixedExpensive', {
        name: {
                type: DataTypes.STRING,
                allowNull: false
        },
        description: DataTypes.STRING,
        color: DataTypes.STRING,
        value: DataTypes.FLOAT,
        id: {
            type: DataTypes.UUID,
            primaryKey: true
            }

    });